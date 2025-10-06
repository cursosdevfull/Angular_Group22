import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from "@angular/core";

export class PaymentGatewayService {
    constructor(private token: string) { }

    processPayment(amount: number): string {
        return `Processed payment of $${amount} with token ${this.token}`;
    }
}

export const PaymentGateway = new InjectionToken<PaymentGatewayService>('PaymentGateway');

export const providesPaymentGateway = (publicKey: string): EnvironmentProviders => {
    return makeEnvironmentProviders([
        {
            provide: PaymentGateway,
            useFactory: (token: string) => {
                return new PaymentGatewayService(token);
            },
            deps: ['PAYMENT_TOKEN'],
        },
        {
            provide: 'PAYMENT_TOKEN',
            useValue: publicKey,
        },
    ])
};
