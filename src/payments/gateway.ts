/**
 * Payment gateway hook.
 *
 * Layout and checkout data are ready. Plug Stripe, PayPal, Mercado Pago,
 * or another processor here without changing the page structure.
 *
 * Recommended PCI flow:
 * - Do not POST raw card numbers to your own server.
 * - Replace the card fields in Checkout.tsx with the provider widget
 *   (Stripe Elements, PayPal Buttons, etc.).
 * - Create a session/intent on the backend, then confirm on the client.
 */

export type PaymentMethod = "card" | "paypal";

export type CheckoutRequest = {
  amountCents: number;
  currency: "USD";
  name: string;
  email: string;
  organization: string;
  purpose: string;
  message: string;
  method: PaymentMethod;
};

export type CheckoutSuccess = {
  ok: true;
  transactionId: string;
};

export class GatewayNotConfiguredError extends Error {
  constructor() {
    super("Payment gateway is not configured yet. Implement processCheckout in src/payments/gateway.ts");
    this.name = "GatewayNotConfiguredError";
  }
}

export async function processCheckout(_request: CheckoutRequest): Promise<CheckoutSuccess> {
  // TODO: create a checkout session / payment intent with your gateway,
  // then return { ok: true, transactionId }.
  throw new GatewayNotConfiguredError();
}
