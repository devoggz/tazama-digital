"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button, Code, addToast, Select, SelectItem } from "@heroui/react";
import { ArrowRight, ResetIcon } from "../icons";
import {
  finishes,
  weights,
  types,
  edges,
  PRODUCTS,
  PRICING,
  PrintingService,
} from "@/app/data/data";

export default function DigitalForm() {
  const router = useRouter();
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [lastAction, setLastAction] = React.useState<"submit" | "reset" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculatePrice = () => {
    const length = Number(formData.length);
    const width = Number(formData.width);
    const quantity = Number(formData.quantity || 1);
    const service = formData.service as PrintingService;

    if (!length || !width || !service) return null;

    const area = length * width;

    if (service === "digital") {
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
    }

    if (service === "large") {
      const material =
        PRICING.large.material[
          formData.material as keyof typeof PRICING.large.material
        ] || 0;

      const finish =
        PRICING.large.finish[
          formData.finish as keyof typeof PRICING.large.finish
        ] || 0;

      return area * (material + finish) * quantity;
    }

    return null;
  };

  const totalPrice = calculatePrice();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLastAction("submit");

    // Validate that we have all required fields and a price
    if (!totalPrice || totalPrice <= 0) {
      addToast({
        title: "Invalid Quote",
        description: "Please fill in all required fields to generate a quote.",
        color: "danger",
      });
      return;
    }

    // Store form data in sessionStorage to pass to payment page
    sessionStorage.setItem(
      "orderData",
      JSON.stringify({
        service: formData.service,
        product: formData.product,
        totalPrice: totalPrice,
        formData: formData,
      })
    );

    router.push("/payment");
  };

  const service = formData.service as PrintingService | undefined;

  return (
    <Form
      className="max-w-lg flex flex-col gap-4"
      onSubmit={handleSubmit}
      onReset={() => {
        setFormData({});
        setLastAction("reset");
      }}
    >
      {/* Printing Service */}
      <Select
        label="Printing Service"
        name="service"
        variant="underlined"
        onChange={(e) => handleInputChange(e as any)}
        isRequired
      >
        <SelectItem key="digital">Digital Printing</SelectItem>
        <SelectItem key="large">Large Format Printing</SelectItem>
      </Select>

      {/* Product */}
      {service && (
        <Select
          label="Product"
          name="product"
          variant="underlined"
          onChange={(e) => handleInputChange(e as any)}
          isRequired
        >
          {PRODUCTS[service].map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      )}

      {/* Dimensions */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Length (mm)"
          name="length"
          type="number"
          onChange={handleInputChange}
          isRequired
        />
        <Input
          label="Width (cm)"
          name="width"
          type="number"
          onChange={handleInputChange}
          isRequired
        />
      </div>

      {/* Digital Options */}
      {service === "digital" && (
        <>
          <Select
            label="Paper Type"
            name="paperType"
            onChange={(e) => handleInputChange(e as any)}
            isRequired
          >
            {types.map((t) => (
              <SelectItem key={t.key}>{t.label}</SelectItem>
            ))}
          </Select>

          <Select
            label="Paper Weight"
            name="weight"
            onChange={(e) => handleInputChange(e as any)}
            isRequired
          >
            {weights.map((w) => (
              <SelectItem key={w.key}>{w.label}</SelectItem>
            ))}
          </Select>

          <Select
            label="Finish"
            name="finish"
            onChange={(e) => handleInputChange(e as any)}
            isRequired
          >
            {finishes.map((f) => (
              <SelectItem key={f.key}>{f.label}</SelectItem>
            ))}
          </Select>
        </>
      )}

      {/* Large Format Options */}
      {service === "large" && (
        <>
          <Select
            label="Material"
            name="material"
            onChange={(e) => handleInputChange(e as any)}
            isRequired
          >
            <SelectItem key="vinyl">Vinyl</SelectItem>
            <SelectItem key="canvas">Canvas</SelectItem>
          </Select>

          <Select
            label="Finish"
            name="finish"
            onChange={(e) => handleInputChange(e as any)}
            isRequired
          >
            <SelectItem key="lamination">Lamination</SelectItem>
            <SelectItem key="none">No Finish</SelectItem>
          </Select>
        </>
      )}

      <Input
        label="Quantity"
        name="quantity"
        type="number"
        defaultValue="1"
        onChange={handleInputChange}
        isRequired
      />

      <Textarea
        label="Additional Instructions"
        radius="sm"
        name="description"
        onChange={handleInputChange}
      />

      {totalPrice !== null && (
        <div className="flex justify-between w-full items-center p-4 rounded-lg bg-default-100">
          <span className="font-bold">Estimated Total (KES)</span>
          <span className="text-2xl font-bold">
            {totalPrice.toLocaleString()}
          </span>
        </div>
      )}

      <div className="flex w-full gap-2 mt-4 mb-4">
        <Button
          type="submit"
          color="danger"
          fullWidth
          radius="sm"
          endContent={<ArrowRight />}
        >
          Proceed
        </Button>
        <Button radius="sm" type="reset" fullWidth endContent={<ResetIcon />}>
          Reset
        </Button>
      </div>
    </Form>
  );
}
