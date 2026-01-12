import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React from "react";
import DigitalForm from "../Calculators/DigitalForm";
import { ShopIcon } from "../icons";

export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="danger">
          Start new print order
          <ShopIcon />
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add your print details
                </ModalHeader>
                <ModalBody>
                  <DigitalForm />
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Add User
                  </Button> */}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
