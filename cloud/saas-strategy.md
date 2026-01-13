# SaaS Transformation Strategy: MediBook as a Service

To convert the current Hospital Management System into a Software-as-a-Service (SaaS) model, we must move from single-tenant to multi-tenant.

## 1. Database Multi-tenancy 🗄️
Choose one of these strategies for the backend:
- **Shared Database, Shared Schema**: Add a `tenantId` field to every model (Patient, Doctor, Appointment). Simplest to scale but requires strict row-level security.
- **Shared Database, Separate Schemas**: Use Mongoose to connect to different "collections" or "databases" dynamically based on the tenant header.
- **Database per Tenant**: The most secure. A new MongoDB instance or database name (e.g., `hospital_A`, `hospital_B`) for each customer.

## 2. Tenant Identification 🏷️
- **Subdomains**: `hospital-A.medibook.com`, `hospital-B.medibook.com`.
- **URL Path**: `medibook.com/hospital-A/...`
- **Headers**: Custom `X-Tenant-ID` header sent from the frontend.

## 3. Subscription Management 💰
- Integrate with **Stripe** or **PayPal** to manage hospital subscriptions.
- Implement role-based access control (RBAC) that checks if a tenant has an active subscription before allowing writes.

## 4. Shared Infrastructure ☁️
- Use a single Nginx reverse proxy to route all traffic.
- Use a Load Balancer to distribute traffic across multiple instances of the same backend.
