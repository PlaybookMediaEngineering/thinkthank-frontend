# Moderation API

This Cloudflare Worker-based API facilitates content moderation, leveraging OpenAPI 3.1 with [@hono/zod-openapi](https://github.com/honojs/hono). It provides a secure and scalable backend for managing content moderation tasks, including text, image, and user behavior analysis.

## Key Features

- OpenAPI 3.1 compliant endpoints for content submission, analysis, and moderation decisions
- Automatic request validation and OpenAPI schema generation
- Secure storage of moderation data using Cloudflare R2 and KV
- Scalable moderation processing with Durable Objects for state management
- Asynchronous queue for handling large volumes of moderation requests
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

- `POST /v1/moderate`: Submit content for moderation
- `GET /v1/moderate/{id}`: Retrieve moderation result for a specific item
- `POST /v1/moderate/batch`: Submit multiple items for moderation
- `GET /v1/moderate/stats`: Retrieve moderation statistics

## Data Flow

1. Content submission and validation
2. Analysis using moderation algorithms and/or machine learning models
3. Secure storage of moderation results in R2 and metadata in KV
4. Asynchronous processing of large batches through Cloudflare Queue

## Environment Configuration

Required Cloudflare components:
- R2 bucket: `MODERATION_CONTENT_BUCKET`
- KV namespace: `MODERATION_METADATA`
- Durable Object: `ModerationProcessor`
- Queue: `moderation-processing-queue`

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
