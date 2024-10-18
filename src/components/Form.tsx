"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, Mail, Loader } from "lucide-react";
import sendMail from "@/lib/actions";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Votre nom doit avoir au moins 2 caractères.",
  }),
  afterName: z.string().min(2, {
    message: "Votre prénom doit avoir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string(),
  message: z.string().min(10, {
    message: "Votre message doit avoir au moins 10 caractères.",
  }),
  tel: z.string().optional(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      afterName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await sendMail().then(() => {
      toast({
        title: `Message envoyé ✨🎉`,
        description: "Merci pour votre message !",
      });
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full relative"
      >
        {form.formState.isSubmitting && (
          <div className="absolute flex items-center justify-center flex-center inset-0 z-50">
            <Loader className="w-40 h-40 animate-spin text-slate-400" />
          </div>
        )}

        <div className="flex flex-col gap-4 xl:flex-row w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nom</FormLabel>
                <FormControl className="relative">
                  <div>
                    <Input
                      placeholder="ex: Mwilambwe"
                      {...field}
                      className="bg-nightly border-none pl-10"
                    />
                    <User className="absolute left-2 top-2 text-u-yellow-100/50" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="afterName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Prénom</FormLabel>
                <FormControl className="relative">
                  <div>
                    <Input
                      placeholder="ex: Nathan"
                      {...field}
                      className="bg-nightly border-none pl-10"
                    />
                    <User className="absolute left-2 top-2 text-u-yellow-100/50" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-4 xl:flex-row w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl className="relative">
                  <div>
                    <Input
                      placeholder="ex: nathanmwi@gmail.com"
                      {...field}
                      className="bg-nightly border-none pl-10"
                    />
                    <Mail className="absolute left-2 top-2 text-u-yellow-100/50" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Téléphone</FormLabel>
                <FormControl className="relative">
                  <div>
                    <Input
                      placeholder="exp: 0974272593"
                      type="tel"
                      {...field}
                      className="bg-nightly border-none pl-10"
                    />
                    <Phone className="absolute left-2 top-2 text-u-yellow-100/50" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ex: Bonjour, je suis Junior Malangu et je souhaite vous contacter pour..."
                  className="bg-nightly border-none resize-none"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Veuillez nous faire part de ce dont vous avez besoin.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="bg-white text-black hover:bg-white/80 w-full mt-4"
        >
          Envoyer le message
        </Button>
      </form>
    </Form>
  );
}
