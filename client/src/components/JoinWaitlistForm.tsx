import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateLead } from "@/hooks/use-leads";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function JoinWaitlistForm({ className = "" }: { className?: string }) {
  const { mutate, isPending, isSuccess } = useCreateLead();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: InsertLead) => {
    mutate(data);
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-green-500 mb-2" />
            <h3 className="text-lg font-bold text-green-800">You're on the list!</h3>
            <p className="text-green-600 text-sm">We'll notify you as soon as HOAFAX is ready.</p>
          </motion.div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email address" 
                          className="h-12 rounded-xl border-slate-200 bg-white/80 focus:ring-2 focus:ring-primary/20 transition-all text-base"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
                >
                  {isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-slate-500 text-center sm:text-left pl-1">
                Join 2,000+ homebuyers waiting for launch. No spam, ever.
              </p>
            </form>
          </Form>
        )}
      </AnimatePresence>
    </div>
  );
}
