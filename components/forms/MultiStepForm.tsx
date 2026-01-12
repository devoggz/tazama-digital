"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button, addToast, Select, SelectItem, Progress } from "@heroui/react";
import { ArrowRight, ArrowLeft, ResetIcon } from "../icons";
import {
  finishes,
  weights,
  types,
  PRODUCTS,
  PRICING,
  PrintingService,
} from "@/app/data/data";

const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const totalSteps = 4;

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

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.service && formData.product;
      case 2:
        return formData.length && formData.width;
      case 3:
        if (formData.service === "digital") {
          return formData.paperType && formData.weight && formData.finish;
        }
        if (formData.service === "large") {
          return formData.material && formData.finish;
        }
        return false;
      case 4:
        return formData.quantity;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    } else {
      addToast({
        title: "Required Fields",
        description: "Please fill in all required fields before proceeding.",
        color: "warning",
      });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!totalPrice || totalPrice <= 0) {
      addToast({
        title: "Invalid Quote",
        description: "Please fill in all required fields to generate a quote.",
        color: "danger",
      });
      return;
    }

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

  const handleReset = () => {
    setFormData({});
    setCurrentStep(1);
    addToast({
      title: "Form Reset",
      description: "All fields have been cleared.",
      color: "success",
    });
  };

  const service = formData.service as PrintingService | undefined;
  const progressValue = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-lg w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-default-500">
            {Math.round(progressValue)}% Complete
          </span>
        </div>
        <Progress value={progressValue} color="danger" className="mb-2" />
        <p className="text-xs text-default-400">
          {currentStep === 1 && "Select your printing service and product"}
          {currentStep === 2 && "Enter your dimensions"}
          {currentStep === 3 && "Choose your specifications"}
          {currentStep === 4 && "Review and finalize your order"}
        </p>
      </div>

      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Step 1: Service & Product */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-300 w-full">
            <h3 className="text-lg font-semibold mb-4">Service & Product</h3>

            <Select
              label="Printing Service"
              fullWidth
              name="service"
              variant="underlined"
              selectedKeys={formData.service ? [formData.service] : []}
              onChange={(e) => handleInputChange(e as any)}
              isRequired
            >
              <SelectItem key="digital">Digital Printing</SelectItem>
              <SelectItem key="large">Large Format Printing</SelectItem>
            </Select>

            {service && (
              <Select
                label="Product"
                fullWidth
                name="product"
                variant="underlined"
                selectedKeys={formData.product ? [formData.product] : []}
                onChange={(e) => handleInputChange(e as any)}
                isRequired
              >
                {PRODUCTS[service].map((item) => (
                  <SelectItem key={item.key}>{item.label}</SelectItem>
                ))}
              </Select>
            )}
          </div>
        )}

        {/* Step 2: Dimensions */}
        {currentStep === 2 && (
          <div className="w-full space-y-4 animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold mb-4">Dimensions</h3>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Length (mm)"
                name="length"
                type="number"
                value={formData.length || ""}
                onChange={handleInputChange}
                isRequired
              />
              <Input
                label="Width (cm)"
                name="width"
                type="number"
                value={formData.width || ""}
                onChange={handleInputChange}
                isRequired
              />
            </div>
          </div>
        )}

        {/* Step 3: Specifications */}
        {currentStep === 3 && (
          <div className="w-full space-y-4 animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold mb-4">Specifications</h3>

            {service === "digital" && (
              <>
                <Select
                  label="Paper Type"
                  name="paperType"
                  selectedKeys={formData.paperType ? [formData.paperType] : []}
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
                  selectedKeys={formData.weight ? [formData.weight] : []}
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
                  selectedKeys={formData.finish ? [formData.finish] : []}
                  onChange={(e) => handleInputChange(e as any)}
                  isRequired
                >
                  {finishes.map((f) => (
                    <SelectItem key={f.key}>{f.label}</SelectItem>
                  ))}
                </Select>
              </>
            )}

            {service === "large" && (
              <>
                <Select
                  label="Material"
                  name="material"
                  selectedKeys={formData.material ? [formData.material] : []}
                  onChange={(e) => handleInputChange(e as any)}
                  isRequired
                >
                  <SelectItem key="vinyl">Vinyl</SelectItem>
                  <SelectItem key="canvas">Canvas</SelectItem>
                </Select>

                <Select
                  label="Finish"
                  name="finish"
                  selectedKeys={formData.finish ? [formData.finish] : []}
                  onChange={(e) => handleInputChange(e as any)}
                  isRequired
                >
                  <SelectItem key="lamination">Lamination</SelectItem>
                  <SelectItem key="none">No Finish</SelectItem>
                </Select>
              </>
            )}
          </div>
        )}

        {/* Step 4: Review & Additional Info */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold mb-4">Finalize Order</h3>

            <Input
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity || "1"}
              defaultValue="1"
              onChange={handleInputChange}
              isRequired
            />

            <Textarea
              label="Additional Instructions"
              radius="sm"
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
              placeholder="Any special requirements or instructions..."
            />

            {/* Order Summary */}
            <div className="bg-default-100 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-sm mb-3">Order Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-default-500">Service:</span>
                  <span className="font-medium capitalize">
                    {formData.service}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-500">Product:</span>
                  <span className="font-medium">
                    {
                      PRODUCTS[service!]?.find(
                        (p) => p.key === formData.product
                      )?.label
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-500">Dimensions:</span>
                  <span className="font-medium">
                    {formData.length} x {formData.width}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-500">Quantity:</span>
                  <span className="font-medium">{formData.quantity || 1}</span>
                </div>
              </div>
            </div>

            {totalPrice !== null && (
              <div className="flex justify-between w-full items-center p-4 rounded-lg bg-danger/10 border-2 border-danger">
                <span className="font-bold">Estimated Total (KES)</span>
                <span className="text-2xl font-bold text-danger">
                  {totalPrice.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="w-full flex gap-2 mt-6">
          {currentStep > 1 && (
            <Button
              type="button"
              onPress={handleBack}
              variant="bordered"
              radius="sm"
              startContent={<ArrowLeftIcon />}
            >
              Back
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onPress={handleNext}
              color="danger"
              fullWidth
              radius="sm"
              endContent={<ArrowRight />}
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              color="danger"
              fullWidth
              radius="sm"
              endContent={<ArrowRight />}
            >
              Proceed to Payment
            </Button>
          )}

          <Button
            type="button"
            onPress={handleReset}
            variant="light"
            radius="sm"
            isIconOnly
          >
            <ResetIcon />
          </Button>
        </div>
      </Form>
    </div>
  );
}
