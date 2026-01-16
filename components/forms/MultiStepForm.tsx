"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@heroui/input";
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

  const handleSubmit = () => {
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
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Progress Header */}
      <div className="mb-8 space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Get Your Quote</h1>
            <p className="text-sm text-default-500 mt-1">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          <Button
            variant="light"
            size="sm"
            isIconOnly
            onPress={handleReset}
            aria-label="Reset form"
            className="text-default-400 hover:text-default-600"
          >
            <ResetIcon />
          </Button>
        </div>

        <Progress
          value={progressValue}
          color="danger"
          className="w-full h-1.5"
          classNames={{
            indicator: "transition-all duration-300 ease-in-out",
          }}
        />

        <p className="text-sm text-default-600 font-medium">
          {currentStep === 1 && "Choose a service and product"}
          {currentStep === 2 && "Define print dimensions"}
          {currentStep === 3 && "Select material and finishing options"}
          {currentStep === 4 && "Confirm quantity and review order"}
        </p>
      </div>

      <div className="w-full">
        <div className="min-h-[400px] mb-8">
          {currentStep === 1 && (
            <section className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  Service & Product
                </h2>
                <p className="text-sm text-default-500">
                  Select your printing service and desired product
                </p>
              </div>

              <div className="space-y-5">
                <Select
                  label="Printing Service"
                  name="service"
                  placeholder="Choose a printing service"
                  fullWidth
                  selectedKeys={formData.service ? [formData.service] : []}
                  onChange={(e) => handleInputChange(e as any)}
                  isRequired
                  classNames={{
                    trigger: "h-14",
                  }}
                >
                  <SelectItem key="digital">Digital Printing</SelectItem>
                  <SelectItem key="large">Large Format Printing</SelectItem>
                </Select>

                {service && (
                  <Select
                    label="Product"
                    name="product"
                    placeholder="Choose a product"
                    fullWidth
                    selectedKeys={formData.product ? [formData.product] : []}
                    onChange={(e) => handleInputChange(e as any)}
                    isRequired
                    classNames={{
                      trigger: "h-14",
                    }}
                  >
                    {PRODUCTS[service].map((item) => (
                      <SelectItem key={item.key}>{item.label}</SelectItem>
                    ))}
                  </Select>
                )}
              </div>
            </section>
          )}

          {currentStep === 2 && (
            <section className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-semibold mb-1">Dimensions</h2>
                <p className="text-sm text-default-500">
                  Specify the size of your print
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label="Length (mm)"
                  name="length"
                  type="number"
                  placeholder="Enter length"
                  fullWidth
                  value={formData.length || ""}
                  onChange={handleInputChange}
                  isRequired
                  classNames={{
                    inputWrapper: "h-14",
                  }}
                />
                <Input
                  label="Width (cm)"
                  name="width"
                  type="number"
                  placeholder="Enter width"
                  fullWidth
                  value={formData.width || ""}
                  onChange={handleInputChange}
                  isRequired
                  classNames={{
                    inputWrapper: "h-14",
                  }}
                />
              </div>
            </section>
          )}

          {currentStep === 3 && (
            <section className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-semibold mb-1">Specifications</h2>
                <p className="text-sm text-default-500">
                  Choose material and finishing options
                </p>
              </div>

              <div className="space-y-5">
                {service === "digital" && (
                  <>
                    <Select
                      label="Paper Type"
                      name="paperType"
                      placeholder="Select paper type"
                      fullWidth
                      selectedKeys={
                        formData.paperType ? [formData.paperType] : []
                      }
                      onChange={(e) => handleInputChange(e as any)}
                      isRequired
                      classNames={{
                        trigger: "h-14",
                      }}
                    >
                      {types.map((t) => (
                        <SelectItem key={t.key}>{t.label}</SelectItem>
                      ))}
                    </Select>

                    <Select
                      label="Paper Weight"
                      name="weight"
                      placeholder="Select paper weight"
                      fullWidth
                      selectedKeys={formData.weight ? [formData.weight] : []}
                      onChange={(e) => handleInputChange(e as any)}
                      isRequired
                      classNames={{
                        trigger: "h-14",
                      }}
                    >
                      {weights.map((w) => (
                        <SelectItem key={w.key}>{w.label}</SelectItem>
                      ))}
                    </Select>

                    <Select
                      label="Finish"
                      name="finish"
                      placeholder="Select finish"
                      fullWidth
                      selectedKeys={formData.finish ? [formData.finish] : []}
                      onChange={(e) => handleInputChange(e as any)}
                      isRequired
                      classNames={{
                        trigger: "h-14",
                      }}
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
                      placeholder="Select material"
                      fullWidth
                      selectedKeys={
                        formData.material ? [formData.material] : []
                      }
                      onChange={(e) => handleInputChange(e as any)}
                      isRequired
                      classNames={{
                        trigger: "h-14",
                      }}
                    >
                      <SelectItem key="vinyl">Vinyl</SelectItem>
                      <SelectItem key="canvas">Canvas</SelectItem>
                    </Select>

                    <Select
                      label="Finish"
                      name="finish"
                      placeholder="Select finish"
                      fullWidth
                      selectedKeys={formData.finish ? [formData.finish] : []}
                      onChange={(e) => handleInputChange(e as any)}
                      isRequired
                      classNames={{
                        trigger: "h-14",
                      }}
                    >
                      <SelectItem key="lamination">Lamination</SelectItem>
                      <SelectItem key="none">No Finish</SelectItem>
                    </Select>
                  </>
                )}
              </div>
            </section>
          )}

          {currentStep === 4 && (
            <section className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-xl font-semibold mb-1">Finalize Order</h2>
                <p className="text-sm text-default-500">
                  Review your order and confirm quantity
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  label="Quantity"
                  name="quantity"
                  type="number"
                  placeholder="Enter quantity"
                  fullWidth
                  value={formData.quantity || "1"}
                  onChange={handleInputChange}
                  isRequired
                  classNames={{
                    inputWrapper: "h-14",
                  }}
                />

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Upload Artwork
                  </label>
                  <Input
                    type="file"
                    name="artwork"
                    fullWidth
                    accept="image/*,.pdf,.ai,.psd"
                    classNames={{
                      inputWrapper: "h-14",
                    }}
                  />
                  <p className="text-xs text-default-500 mt-1">
                    Accepted formats: JPG, PNG, PDF, AI, PSD (Max 50MB)
                  </p>
                </div>

                <Textarea
                  label="Additional Instructions (Optional)"
                  name="description"
                  fullWidth
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  placeholder="Enter any special instructions or notes"
                  minRows={3}
                />

                <div className="rounded-xl border-2 border-default-200 bg-default-50 p-6 space-y-4">
                  <h4 className="text-base font-semibold">Order Summary</h4>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-default-200">
                      <span className="text-default-600">Service</span>
                      <span className="font-semibold capitalize">
                        {formData.service}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-default-200">
                      <span className="text-default-600">Product</span>
                      <span className="font-semibold">
                        {
                          PRODUCTS[service!]?.find(
                            (p) => p.key === formData.product
                          )?.label
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-default-200">
                      <span className="text-default-600">Dimensions</span>
                      <span className="font-semibold">
                        {formData.length} × {formData.width}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-default-600">Quantity</span>
                      <span className="font-semibold">{formData.quantity}</span>
                    </div>
                  </div>
                </div>

                {totalPrice !== null && (
                  <div className="rounded-xl border-2 border-danger bg-danger-50/50 p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-default-700">
                        Estimated Total
                      </span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-danger">
                          KES {totalPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-default-500 mt-1">
                          Inclusive of all specifications
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex gap-3 pt-6 border-t border-default-200">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="bordered"
              size="lg"
              onPress={handleBack}
              startContent={<ArrowLeftIcon />}
              className="font-medium"
            >
              Back
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              color="danger"
              size="lg"
              fullWidth
              onPress={handleNext}
              endContent={<ArrowRight />}
              className="font-semibold"
            >
              Continue
            </Button>
          ) : (
            <Button
              type="button"
              color="danger"
              size="lg"
              fullWidth
              onPress={handleSubmit}
              endContent={<ArrowRight />}
              className="font-semibold"
            >
              Proceed to Payment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
