"use client";
import * as z from "zod";
import { Heading } from "@/components/Heading";
import { Music, VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

const VideoGenerationPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      prompt: "",
    },
    resolver: zodResolver(formSchema),
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);
      const response = await axios.post("/api/video", values);
      console.log(response);
      setVideo(response.data);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <Heading
        title="Video Generation"
        description="Turn your visualization to Video"
        icon={VideoIcon}
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
          {!video && !isLoading && (
            <div>
              <Empty label="Start the Conversation" />
            </div>
          )}
          {video && (
            <video
              controls
              className="mt-8 aspect-video w-full rounded-lg border bg-black "
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoGenerationPage;
