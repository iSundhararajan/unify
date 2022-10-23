import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { nanoid } from "nanoid";
import axios from "axios";

function CreateNewCampaign({ open, setOpen }) {
    const toast = useToast();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageLink, setImageLink] = useState("https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80")
    const { user } = useAuth();

    const customToast = ({ title, status }) => {
        return toast({
            title: title,
            status: status,
            duration: 6000,
            isClosable: true,
        });
    };

    const clickSubmit = async () => {
        if (!title || !description || !tags) {
            customToast({ title: "Fill all the inputs", status: "error" });
            return;
        } else {
            let info = {
                title,
                description,
                tags,
                imageLink,
                authorId: user?.id,
                authorName: user?.name,
                uniqueId: nanoid(12),
            };
            setLoading(true);
            let resp = await axios.post(
                "https://5000-isundhararajan-unify-jnw7md09zl4.ws-eu72.gitpod.io/api/campaigns/create",
                info
            );
            console.log(resp.data);
            setLoading(false);
            customToast({
                title: "Campaign Created successfully",
                status: "success",
            });
            setOpen(false);
        }
    };

    return (
        <>
            <Modal isOpen={open} onClose={setOpen} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Campaign</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                placeholder="Campaign description ..."
                                size={"sm"}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Tags</FormLabel>
                            <Input
                                placeholder="#war, #famine, #helpneeded"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Campaign Image Link</FormLabel>
                            <Input
                                value={imageLink}
                                onChange={(e) => setImageLink(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={clickSubmit}
                            isLoading={loading}
                            loadingText={"Saving ..."}
                        >
                            Save
                        </Button>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateNewCampaign;
