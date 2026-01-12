"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button, addToast, Select, SelectItem } from "@heroui/react";
import { ArrowRight, ResetIcon } from "../icons";
import {
  finishes,
  weights,
  types,
  PRODUCTS,
  PRICING,
  PrintingService,
} from "@/app/data/data";

export default function DigitalPrintingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const validTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "application/pdf",
      "application/postscript", // .ai
    ];
    const maxSize = 20 * 1024 * 1024; // 20MB

    if (!validTypes.includes(selectedFile.type)) {
      addToast({
        title: "Invalid File Type",
        description: "Please upload PNG, JPG, PDF or AI files only",
        color: "danger",
      });
      return;
    }

    if (selectedFile.size > maxSize) {
      addToast({
        title: "File Too Large",
        description: "Maximum file size is 20MB",
        color: "danger",
      });
      return;
    }

    setFile(selectedFile);

    // Show preview for images only
    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFilePreview(null);
    }
  };

  const calculatePrice = () => {
    const length = Number(formData.length);
    const width = Number(formData.width);
    const quantity = Number(formData.quantity || 1);

    if (!length || !width) return null;

    // Note: area in mm² — you might want to convert to m² depending on your real pricing
    const area = length * width;

    const paper =
      PRICING.digital.paperType[
        formData.paperType as keyof typeof PRICING.digital.paperType
      ] || 0;
    const weight =
      PRICING.digital.weight[
        formData.weight as keyof typeof PRICING.digital.weight
      ] || 0;
    const finish =
      PRICING.digital.finish[
        formData.finish as keyof typeof PRICING.digital.finish
      ] || 0;

    return area * (paper + weight + finish) * quantity;
  };

  const totalPrice = calculatePrice();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      addToast({
        title: "Artwork Required",
        description: "Please upload your artwork file to proceed",
        color: "danger",
      });
      return;
    }

    if (!totalPrice || totalPrice <= 0) {
      addToast({
        title: "Invalid Quote",
        description: "Please fill in all required fields to generate a quote.",
        color: "danger",
      });
      return;
    }

    // Prepare order data (file itself cannot be stored in sessionStorage)
    const orderData = {
      service: "digital" as PrintingService,
      product: formData.product,
      totalPrice,
      formData,
      artworkFileName: file.name,
      artworkType: file.type,
      artworkSize: file.size,
      // In production: Upload file to server here and store returned URL/ID
    };

    sessionStorage.setItem("orderData", JSON.stringify(orderData));

    // For real app → upload file via API before redirect
    router.push("/payment");
  };

  return (
    <Form
      className="max-w-lg flex flex-col gap-4"
      onSubmit={handleSubmit}
      onReset={() => {
        setFormData({});
        setFile(null);
        setFilePreview(null);
      }}
    >
      <input type="hidden" name="service" value="digital" />

      <Select
        label="Product"
        name="product"
        onChange={handleInputChange as any}
        isRequired
      >
        {PRODUCTS.digital.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>

      <div className="grid grid-cols-2 w-full gap-4">
        <Input
          label="Length (mm)"
          name="length"
          type="number"
          onChange={handleInputChange}
          isRequired
        />
        <Input
          label="Width (mm)"
          name="width"
          type="number"
          onChange={handleInputChange}
          isRequired
        />
      </div>

      <div className="grid grid-cols-2 w-full gap-4">
        <Select
          label="Paper Type"
          name="paperType"
          onChange={handleInputChange as any}
          isRequired
        >
          {types.map((t) => (
            <SelectItem key={t.key}>{t.label}</SelectItem>
          ))}
        </Select>

        <Select
          label="Paper Weight"
          name="weight"
          onChange={handleInputChange as any}
          isRequired
        >
          {weights.map((w) => (
            <SelectItem key={w.key}>{w.label}</SelectItem>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-2 w-full gap-4">
        <Select
          label="Finish"
          name="finish"
          onChange={handleInputChange as any}
          isRequired
        >
          {finishes.map((f) => (
            <SelectItem key={f.key}>{f.label}</SelectItem>
          ))}
        </Select>
        <Input
          label="Quantity"
          name="quantity"
          type="number"
          defaultValue="1"
          onChange={handleInputChange}
          isRequired
        />
      </div>

      {/* === Upload Artwork Section === */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-medium">
          Upload Artwork <span className="text-danger">*</span>
        </label>
        <div className="border-2 border-dashed border-default-300 rounded-lg p-6 text-center hover:border-pink-300 transition-colors">
          <input
            type="file"
            id="artwork-digital"
            accept=".png,.jpg,.jpeg,.pdf,.ai"
            onChange={handleFileChange}
            className="hidden"
            required
          />
          <label htmlFor="artwork-digital" className="cursor-pointer">
            <p className="text-default-600 mb-2 font-medium">
              Click to upload or drag & drop
            </p>
            <p className="text-xs text-default-500">
              Supported formats: PNG, JPG, PDF, AI (max 20MB)
            </p>
          </label>
        </div>

        {file && (
          <div className="mt-2 text-sm">
            <span className="font-medium">Selected:</span> {file.name} •{" "}
            {(file.size / 1024 / 1024).toFixed(1)} MB
          </div>
        )}

        {filePreview && (
          <div className="mt-3 border border-default-200 rounded overflow-hidden">
            <img
              src={filePreview}
              alt="Artwork preview"
              className="max-h-48 w-full object-contain"
            />
          </div>
        )}
      </div>

      <Textarea
        label="Additional Instructions / Notes"
        radius="sm"
        name="description"
        onChange={handleInputChange}
      />

      {totalPrice !== null && totalPrice > 0 && (
        <div className="flex justify-between items-center p-4 rounded-lg bg-default-100">
          <span className="font-bold">Estimated Total (KES)</span>
          <span className="text-2xl font-bold">
            {totalPrice.toLocaleString()}
          </span>
        </div>
      )}

      <div className="flex w-full gap-2 mt-6">
        <Button
          type="submit"
          color="danger"
          fullWidth
          radius="sm"
          endContent={<ArrowRight />}
        >
          Proceed to Payment
        </Button>
        <Button
          type="reset"
          variant="flat"
          fullWidth
          radius="sm"
          endContent={<ResetIcon />}
        >
          Reset
        </Button>
      </div>
    </Form>
  );
}
