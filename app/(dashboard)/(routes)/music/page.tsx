"use client";
import * as z from "zod";
import { Heading } from "@/components/Heading";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UseProContext } from "@/context/use-pro-model";
import toast from "react-hot-toast";

const MusicGenerationPage = () => {
  const { setIsOpen } = useContext(UseProContext);
  const router = useRouter();
  const [music, setMusic] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      prompt: "",
    },
    resolver: zodResolver(formSchema),
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);
      const response = await axios.post("/api/music", values);
      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        setIsOpen(true);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your Concept to Concert"
        icon={Music}
        iconColor="text-emerald-700"
        bgColor="bg-emerald-700/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
              grid
              w-full
              grid-cols-12
              gap-2
              rounded-lg
              border
              p-4
              px-3
              focus-within:shadow-sm
              md:px-6"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input
                        className="border-0 outline-none focus-visible:ring-0
                        focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter the prompt"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 w-full lg:col-span-2"
                disabled={isLoading}
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="bg-muted flex w-full items-center justify-center rounded-lg p-8">
              <Loader />
            </div>
          )}
          {!music && !isLoading && (
            <div>
              <Empty label="Start the Conversation" />
            </div>
          )}
          {music && (
            <audio controls className="mt-8 w-full ">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};
export default MusicGenerationPage;
