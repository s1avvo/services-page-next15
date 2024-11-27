# KLIMA - Service Website

KLIMA is a modern company website designed as a demo project for a client in the air conditioning industry. While created for demonstration purposes, it incorporates some real data provided by my friends at PF Klima. I would like to extend my gratitude to them for allowing me to use atheir materials.

Built using **Next.js 15**, it leverages the latest technologies in the React 19 ecosystem. The project emphasizes performance, user-friendliness, multilingual support.

The website is hosted on the [Vercel](https://vercel.com/) platform, ensuring reliability and fast content loading.

- [KLIMA](https://services-page-nu.vercel.app/) - Check out our website.

## 📦 **Features**

### 1. **Next.js 15**:

- **React 19**: Features advanced APIs and improved performance optimizations.
- **Turbopack**: High-performance bundler for faster builds.
- **Experimental Partial Prerendering (PPR)**: Partial pre-rendering for enhanced performance.
- **New FORM component**

### 2. **Advanced Integrations**

- **Google Reviews and Map pin**: Integration from Google service.
- **Newsletter and Contact Form**: Smooth email management for inquiries via a secure Resend.com service.
- **Cloudinary**: Images are delivered via cdn, ensuring high performance, responsive quality, and device-specific optimization.
- **shadcn/ui**: Customizable component library.

### 3. **Multilingual Support**

- Supported languages: **English** and **Polish**.
- Localization is managed with **next-intl**, making it easy to scale and edit content.

### 4. **Add Environment Variables**

To set up the project, you need to define the following environment variables. For development, create a `.env.local` file and copy the contents from `.env.example` into it, adjusting the values as needed.

- `NEXT_PUBLIC_URL` – Optional on Vercel the address of your website. For local development, i.e. `http://localhost:3000`.
- `NEXT_PUBLIC_LANGUAGE` - Specifies the default language if the browser's language is not available in the `/messages`. Supported values: `PL` or `EN`.

#### Resend API

- `RESEND_API_KEY` - The API key from Resend
- `RESEND_AUDIENCE_ID` - The Audience ID from Resend
- `EMAIL_TO` - The email address where messages from the website should be sent

#### Cloudinary API

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Your public Cloudinary cloud name
- `CLOUDINARY_API_KEY` - The API key from Cloudinary
- `CLOUDINARY_API_SECRET` - The API Secret from Cloudinary
- `CLOUDINARY_URL` - A combination of your API key, secret and cloud name

#### Google API

- `GOOGLE_API_KEY` - The API key from Google
- `GOOGLE_PLACE_ID` - The place ID for your business on Google Maps

### **Technologies Used**

<div>
  <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
</div>

## **Contact**

If you have questions or suggestions, please contact us at: s.nadolny@hotmail.com
