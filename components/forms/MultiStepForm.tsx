"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button, addToast, Select, SelectItem, Progress } from "@heroui/react";
import { ArrowRight, ResetIcon } from "../icons";
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
        return formData.service === "digital"
          ? formData.paperType && formData.weight && formData.finish
          : formData.material && formData.finish;
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
        description: "Please complete all required fields.",
        color: "warning",
      });
    }
  };

  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!totalPrice || totalPrice <= 0) {
      addToast({
        title: "Invalid Quote",
        description: "Please complete the form to generate a quote.",
        color: "danger",
      });
      return;
    }

    sessionStorage.setItem(
      "orderData",
      JSON.stringify({
        service: formData.service,
        product: formData.product,
        totalPrice,
        formData,
      })
    );

    router.push("/payment");
  };

  const handleReset = () => {
    setFormData({});
    setCurrentStep(1);
    addToast({
      title: "Form Reset",
      description: "All selections cleared.",
      color: "success",
    });
  };

  const service = formData.service as PrintingService | undefined;
  const progressValue = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Progress Header */}
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm font-medium">
            Step {currentStep} of {totalSteps}
          </span>

          <Button
            variant="light"
            size="sm"
            isIconOnly
            onPress={handleReset}
            aria-label="Reset form"
          >
            <ResetIcon />
          </Button>
        </div>

        <Progress value={progressValue} color="danger" className="w-full" />
        <p className="text-xs text-default-500">
          {currentStep === 1 && "Choose a service and product"}
          {currentStep === 2 && "Define print dimensions"}
          {currentStep === 3 && "Select material and finishing options"}
          {currentStep === 4 && "Confirm quantity and review order"}
        </p>
      </div>

      <Form className="w-full space-y-10" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <section className="w-full space-y-6">
            <h2 className="text-xl font-semibold">Service & Product</h2>

            <Select
              label="Printing Service"
              name="service"
              variant="underlined"
              fullWidth
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
                name="product"
                variant="underlined"
                fullWidth
                selectedKeys={formData.product ? [formData.product] : []}
                onChange={(e) => handleInputChange(e as any)}
                isRequired
              >
                {PRODUCTS[service].map((item) => (
                  <SelectItem key={item.key}>{item.label}</SelectItem>
                ))}
              </Select>
            )}
          </section>
        )}

        {currentStep === 2 && (
          <section className="w-full space-y-6">
            <h2 className="text-xl font-semibold">Dimensions</h2>

            <div className="grid grid-cols-2 gap-4 w-full">
              <Input
                label="Length (mm)"
                name="length"
                type="number"
                fullWidth
                value={formData.length || ""}
                onChange={handleInputChange}
                isRequired
              />
              <Input
                label="Width (cm)"
                name="width"
                type="number"
                fullWidth
                value={formData.width || ""}
                onChange={handleInputChange}
                isRequired
              />
            </div>
          </section>
        )}

        {currentStep === 3 && (
          <section className="w-full space-y-6">
            <h2 className="text-xl font-semibold">Specifications</h2>

            {service === "digital" && (
              <>
                <Select
                  label="Paper Type"
                  name="paperType"
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
                  selectedKeys={formData.finish ? [formData.finish] : []}
                  onChange={(e) => handleInputChange(e as any)}
                  isRequired
                >
                  <SelectItem key="lamination">Lamination</SelectItem>
                  <SelectItem key="none">No Finish</SelectItem>
                </Select>
              </>
            )}
          </section>
        )}

        {currentStep === 4 && (
          <section className="w-full space-y-6">
            <h2 className="text-xl font-semibold">Finalize Order</h2>

            <Input
              label="Quantity"
              name="quantity"
              type="number"
              fullWidth
              value={formData.quantity || "1"}
              onChange={handleInputChange}
              isRequired
            />

            <Textarea
              label="Additional Instructions"
              name="description"
              fullWidth
              value={formData.description || ""}
              onChange={handleInputChange}
              placeholder="Optional notes or special instructions"
            />

            <div className="w-full rounded-lg border bg-default-100 p-4 space-y-2">
              <h4 className="text-sm font-semibold">Order Summary</h4>

              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Service</span>
                  <span className="font-medium capitalize">
                    {formData.service}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Product</span>
                  <span className="font-medium">
                    {
                      PRODUCTS[service!]?.find(
                        (p) => p.key === formData.product
                      )?.label
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Dimensions</span>
                  <span className="font-medium">
                    {formData.length} × {formData.width}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span className="font-medium">{formData.quantity}</span>
                </div>
              </div>
            </div>

            {totalPrice !== null && (
              <div className="w-full flex justify-between items-center rounded-lg border-2 border-danger bg-danger/10 p-4">
                <span className="font-semibold">Estimated Total (KES)</span>
                <span className="text-2xl font-bold text-danger">
                  {totalPrice.toLocaleString()}
                </span>
              </div>
            )}
          </section>
        )}

        {/* Footer Navigation */}
        <div className="w-full flex gap-3 pt-6">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="bordered"
              onPress={handleBack}
              startContent={<ArrowLeftIcon />}
            >
              Back
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              color="danger"
              fullWidth
              onPress={handleNext}
              endContent={<ArrowRight />}
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              color="danger"
              fullWidth
              endContent={<ArrowRight />}
            >
              Proceed to Payment
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
