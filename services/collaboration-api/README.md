# Collaboration API

This Cloudflare Worker-based API facilitates real-time collaboration features, leveraging OpenAPI 3.1 with [@hono/zod-openapi](https://github.com/honojs/hono). It provides a secure and scalable backend for managing collaborative sessions, document sharing, and real-time updates.

## Key Features

- OpenAPI 3.1 compliant endpoints for session management, document sharing, and real-time updates
- Automatic request validation and OpenAPI schema generation
- Secure data storage using Cloudflare R2 and KV
- Scalable collaboration session management with Durable Objects
- Real-time update queue for synchronizing changes across clients
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

- `POST /v1/sessions`: Create a new collaboration session
- `GET /v1/sessions/{id}`: Retrieve session details
- `PUT /v1/sessions/{id}/documents`: Share a document in a session
- `GET /v1/sessions/{id}/updates`: Stream real-time updates (WebSocket)

## Data Flow

1. Session creation and participant authentication
2. Document sharing and version control
3. Real-time update propagation via WebSockets
4. Conflict resolution and change merging

## Environment Configuration

Required Cloudflare components:
- R2 bucket: `COLLABORATION_DOCUMENTS_BUCKET`
- KV namespace: `SESSION_METADATA`
- Durable Object: `CollaborationSession`
- Queue: `real-time-update-queue`

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
