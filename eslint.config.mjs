import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✨ Bắt đầu override hoặc tắt rule ở đây
  {
    rules: {
      // ❌ Vô hiệu hóa yêu cầu khai báo type cho props (TS)
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // ❌ Cho phép sử dụng console.log
      "no-console": "off",

      // ❌ Không bắt buộc import React ở file JSX (dành cho các version Next.js mới)
      "react/react-in-jsx-scope": "off",

      // ❌ Không bắt lỗi khi có biến chưa dùng
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],

      // ❌ Cho phép dùng `any`
      "@typescript-eslint/no-explicit-any": "off",

      // ✅ Nếu bạn muốn thêm rule nhẹ nhàng hơn
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
    },
  },
];

export default eslintConfig;
