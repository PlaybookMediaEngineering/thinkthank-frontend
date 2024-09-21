# Embedding API

This Cloudflare Worker-based API facilitates text embedding generation, leveraging OpenAPI 3.1 with [@hono/zod-openapi](https://github.com/honojs/hono). It provides a secure and scalable backend for generating, storing, and retrieving text embeddings for various natural language processing tasks.

## Key Features

- OpenAPI 3.1 compliant endpoints for embedding generation and retrieval
- Automatic request validation and OpenAPI schema generation
- Secure storage of embeddings using Cloudflare R2 and KV
- Scalable embedding generation with Durable Objects for state management
- Asynchronous processing queue for handling large embedding requests
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

- `POST /v1/embeddings`: Generate embeddings for given text
- `GET /v1/embeddings/{id}`: Retrieve a specific embedding
- `POST /v1/embeddings/batch`: Generate embeddings for multiple texts
- `GET /v1/embeddings/search`: Search for similar embeddings

## Data Flow

1. Text submission and validation
2. Embedding generation using machine learning models
3. Secure storage of embeddings in R2 and metadata in KV
4. Asynchronous processing of large batches through Cloudflare Queue

## Environment Configuration

Required Cloudflare components:
- R2 bucket: `EMBEDDINGS_BUCKET`
- KV namespace: `EMBEDDING_METADATA`
- Durable Object: `EmbeddingGenerator`
- Queue: `embedding-processing-queue`

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
