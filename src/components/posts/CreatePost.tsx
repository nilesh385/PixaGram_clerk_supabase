import { PlusIcon, Upload, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, postSchema } from "@/types/types";
import { Input } from "../ui/input";
import { useState } from "react";

export default function CreatePost() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<Post>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImage(null);
    setImagePreview(null);
  };
  const handleCreatePost = async (values: Post) => {
    console.log(values);
  };

  return (
    <div className="w-max h-max">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="size-12 fixed bottom-20 right-20 rounded-full border-[1px]">
            <PlusIcon />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Write a Title , desciption and image to create a post. Image is
              optional.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleCreatePost)}
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title..." id="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Description..."
                        id="description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <>
                        <Input
                          type="file"
                          accept="image/*"
                          id="image"
                          className="hidden"
                          {...field}
                          onChange={(e) => handleImageChange(e)}
                        />
                        <label
                          htmlFor="image"
                          className=" block text-center p-4 border-2 border-dashed rounded-lg"
                        >
                          {imagePreview ? (
                            <>
                              <div className="h-full w-full relative">
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  className=" max-h-64 mx-auto"
                                />
                                <Button
                                  className="absolute top-2 right-2 h-5 w-5 p-0 rounded-full border-[1px] border-gray-300"
                                  onClick={(e) => handleRemoveImage(e)}
                                >
                                  <X />
                                </Button>
                              </div>
                            </>
                          ) : (
                            <div className="text-gray-500 cursor-pointer">
                              <Upload className="h-8 w-8 mx-auto mb-2" />
                              <p>Click to upload an image</p>
                            </div>
                          )}
                        </label>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Create Post</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
