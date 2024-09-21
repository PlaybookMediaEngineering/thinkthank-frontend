# Monetization API

This Cloudflare Worker-based API facilitates monetization features, leveraging OpenAPI 3.1 with [@hono/zod-openapi](https://github.com/honojs/hono). It provides a secure and scalable backend for managing payments, subscriptions, and revenue-sharing functionalities.

## Key Features

- OpenAPI 3.1 compliant endpoints for payment processing, subscription management, and revenue analytics
- Automatic request validation and OpenAPI schema generation
- Secure storage of financial data using Cloudflare R2 and KV
- Scalable transaction processing with Durable Objects for state management
- Asynchronous queue for handling high-volume payment events
- Interactive API documentation via Swagger UI

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   - Copy `apps/web/.env.example` to `apps/web/.env.local`
   - Fill in the required values
4. Log in to Cloudflare:
   ```
   wrangler login
   ```
5. Deploy the API:
   ```
   wrangler deploy
   ```

## Project Structure

- `src/`
  - `index.ts`: Main application entry point
  - `endpoints/`: API route definitions
  - `pkg/`: Shared utilities and configurations
- `test/`: Test files
- `scripts/`: Build and deployment scripts
- `.github/workflows/`: CI/CD pipelines

## Development

1. Start the local server:
   ```
   wrangler dev
   ```
2. Access Swagger UI: `http://localhost:9000/`
3. Make changes in `src/`; the server will hot-reload

## API Endpoints

- `POST /v1/payments`: Process a payment
- `GET /v1/subscriptions/{id}`: Retrieve subscription details
- `POST /v1/subscriptions`: Create a new subscription
- `GET /v1/analytics/revenue`: Retrieve revenue analytics

## Data Flow

1. Payment or subscription request and validation
2. Secure processing using integrated payment gateways
3. Storage of transaction data in R2 and metadata in KV
4. Asynchronous handling of webhooks and notifications through Cloudflare Queue

## Environment Configuration

Required Cloudflare components:
- R2 bucket: `MONETIZATION_DATA_BUCKET`
- KV namespace: `TRANSACTION_METADATA`
- Durable Object: `PaymentProcessor`
- Queue: `payment-event-queue`

Refer to `apps/web/.env.example` for required environment variables.

## Deployment

Automated deployment is set up via GitHub Actions. See `.github/workflows/deploy-public-app.yaml` for the workflow configuration.

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your fork
5. Submit a pull request

Ensure your code passes all tests and linting checks before submitting.

## License

This project is open source under the [MIT License](LICENSE).

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Hono Framework](https://hono.dev/)
- [OpenAPI Specification](https://swagger.io/specification/)

For detailed API documentation, refer to the Swagger UI when running locally or the generated `api.json` file.
