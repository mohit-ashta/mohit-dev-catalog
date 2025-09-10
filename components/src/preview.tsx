"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Header } from "../header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export const PreviewSection = () => {
  const searchParams = useSearchParams();
  const queryValue = searchParams.get("id") || "";

  const handlePurchase = () => {
    console.log("Proceeding with purchase of:", queryValue);
  };

  return (
    <>
      <Header />
      <div className="flex-1">
        <iframe
          src={"https://www.cuilsoft.com/"}
          className="w-full border-0"
          title="Template Preview"
          style={{ height: "calc(100vh - 155px)" }}
        />
      </div>

      {/* Purchase Section */}
      <div className="flex justify-center items-center py-5 bg-black">
        <Dialog>
          <DialogTrigger asChild className="">
            <Button
              size="lg"
              className="
                relative inline-flex gap-3
                px-8 py-6
                text-md font-semibold
                text-white
                bg-gradient-to-r from-gray-800 via-emerald-500 to-emerald-900
                rounded-2xl shadow-xl
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300 cursor-pointer
              "
            >
              <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              Purchase Template
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md bg-black text-foreground">
            <DialogHeader>
              <DialogTitle>Confirm Purchase</DialogTitle>
              <DialogDescription>
                You are about to purchase template with ID:{" "}
                <span className="font-semibold text-emerald-600">
                  {queryValue || "N/A"}
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="py-4 text-sm text-muted-foreground">
              Once confirmed, you’ll be redirected to checkout to complete your
              payment.
            </div>

            <DialogFooter>
              {/* <Button
                variant="outline"
                className="hover:bg-black bg-black hover:border-emerald-600 hover:text-white cursor-pointer"
              >
                Cancel
              </Button> */}
              <Button
                onClick={handlePurchase}
                className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-lg hover:opacity-90 cursor-pointer"
              >
                Confirm & Pay
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
