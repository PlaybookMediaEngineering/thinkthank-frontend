# Social Graph Async Worker

This Cloudflare Worker-based service facilitates asynchronous social graph operations, leveraging OpenAPI 3.1 with [@hono/zod-openapi](https://github.com/honojs/hono). It provides a scalable backend for managing complex social network relationships, friend recommendations, and graph analytics.

## Key Features

- OpenAPI 3.1 compliant endpoints for social graph operations and analytics
- Automatic request validation and OpenAPI schema generation
- Efficient graph data storage and caching using Cloudflare R2 and KV
- Scalable graph processing with Durable Objects for state management
- Asynchronous queue for handling long-running graph operations
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
5. Deploy the worker:
   ```
   wrangler deploy
   ```

## Project Structure

- `src/`
  - `index.ts`: Main worker entry point
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

- `POST /v1/graph/connections`: Add or update social connections
- `GET /v1/graph/connections/{userId}`: Retrieve connections for a specific user
- `POST /v1/graph/recommendations`: Generate friend recommendations
- `GET /v1/graph/analytics`: Retrieve social graph analytics

## Data Flow

1. Social graph operation submission and validation
2. Asynchronous processing of complex graph operations
3. Storing and caching of graph data in R2 and KV
4. Notification of completed operations via webhooks or polling

## Environment Configuration

Required Cloudflare components:
- R2 bucket: `SOCIAL_GRAPH_DATA_BUCKET`
- KV namespace: `GRAPH_CACHE`
- Durable Object: `GraphProcessor`
- Queue: `graph-operation-queue`

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
