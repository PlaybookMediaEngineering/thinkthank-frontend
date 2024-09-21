# Citizen Reporting API

This Cloudflare Worker-based API facilitates citizen reporting, leveraging OpenAPI 3.1 with [@hono/zod-openapi](https://github.com/honojs/hono). It provides a secure and scalable backend for managing citizen reports, from submission to processing.

## Key Features

- OpenAPI 3.1 compliant endpoints for report submission, retrieval, and management
- Automatic request validation and OpenAPI schema generation
- Secure data storage using Cloudflare R2 and KV
- Scalable report state management with Durable Objects
- Asynchronous report processing queue
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

- `POST /v1/reports`: Submit a new report
- `GET /v1/reports/{id}`: Retrieve a specific report
- `PUT /v1/reports/{id}`: Update an existing report
- `GET /v1/reports`: List reports with filtering

## Data Flow

1. Report submission and validation
2. Secure storage in R2 (attachments) and KV (metadata)
3. Report state management via Durable Objects
4. Asynchronous processing through Cloudflare Queue

## Environment Configuration

Required Cloudflare components:
- R2 bucket: `CITIZEN_REPORTS_BUCKET`
- KV namespace: `REPORT_METADATA`
- Durable Object: `ReportState`
- Queue: `report-processing-queue`

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
