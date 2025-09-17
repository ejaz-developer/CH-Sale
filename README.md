# CH Sale - Point of Sale System

A modern, feature-rich Point of Sale (POS) system built with **Electron** and **React.js**. Designed for small to medium businesses with a beautiful dark theme interface and comprehensive business management features.

![POS Master Preview](https://via.placeholder.com/800x400/264653/e2e8f0?text=POS+Master+Preview)

## 🚀 Features

### 📊 Dashboard
- Real-time sales metrics and KPIs
- Live transaction feed
- Top-selling products analytics
- System alerts and notifications
- Quick action buttons
- Today's sales summary

### 💰 Sales Management
- Intuitive product selection interface
- Shopping cart with quantity management
- Multiple payment methods (Cash, Card, Digital)
- Discount system with percentage calculations
- Tax calculation (configurable)
- Customer information capture
- Receipt generation

### 📦 Inventory Management
- Product catalog with categories
- Stock level monitoring
- Low stock alerts
- Product search and filtering
- Visual stock indicators

### 🎨 Modern UI/UX
- Dark theme with glassmorphism effects
- Responsive design for all screen sizes
- Smooth animations and transitions
- Professional color palette
- Collapsible sidebar navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18+
- **Desktop Framework**: Electron
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Icons**: Heroicons (SVG)
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ejaz-developer/pos-master.git
cd pos-master
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Install Electron Dependencies

```bash
# Install Electron as dev dependency
npm install --save-dev electron

# Or with yarn
yarn add --dev electron
```

### 4. Start Development Server

```bash
# Start React development server
npm run dev

# Or with yarn
yarn dev
```

### 5. Run Electron App

```bash
# In a new terminal, start Electron
npm run electron

# Or with yarn
yarn electron
```

## 📁 Project Structure

```
pos-master/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Sales.jsx
│   │   ├── Products.jsx
│   │   ├── Inventory.jsx
│   │   ├── Customers.jsx
│   │   ├── Transactions.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── electron/
│   └── main.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## ⚙️ Configuration

### Tailwind CSS Configuration

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'charcoal': {
    DEFAULT: '#264653',
    'light': '#3a5f6b',
    'darker': '#1a2f36',
    'darkest': '#0f1c21'
  },
  'persian-green': {
    DEFAULT: '#2a9d8f',
    'light': '#3db5a0',
    'dark': '#1e6b5c'
  },
  'saffron': {
    DEFAULT: '#e9c46a',
    'light': '#edc878',
    'dark': '#b8984a'
  },
  'sandy-brown': {
    DEFAULT: '#f4a261',
    'light': '#f6b074',
    'dark': '#c7824b'
  },
  'burnt-sienna': {
    DEFAULT: '#e76f51',
    'light': '#ea8166',
    'dark': '#b85a42'
  }
}
```

### Electron Configuration

Main Electron process configuration in `electron/main.js`:

```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the app
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile('dist/index.html');
  }
}
```

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start Vite development server
npm run electron     # Start Electron app in development
npm run dev:electron # Start both React and Electron concurrently
```

### Building
```bash
npm run build        # Build React app for production
npm run electron:pack # Package Electron app
npm run dist         # Create distributable packages
```

### Testing & Linting
```bash
npm run test         # Run tests
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🌟 Usage Guide

### 1. Dashboard Overview
- View real-time sales metrics
- Monitor today's performance
- Check system alerts
- Access quick actions

### 2. Processing Sales
1. Navigate to **Sales** page
2. Search or browse products
3. Click products to add to cart
4. Adjust quantities as needed
5. Add customer information (optional)
6. Apply discounts if applicable
7. Select payment method
8. Click "Process Sale"

### 3. Managing Products
- Add new products with categories
- Update stock levels
- Set pricing and discounts
- Monitor inventory status

### 4. Customer Management
- Store customer information
- Track purchase history
- Manage customer preferences
- Generate customer reports

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature or bug fix
4. **Make your changes** and commit them
5. **Push to your fork** and submit a pull request

### Development Workflow

1. **Clone and Setup**
   ```bash
   git clone https://github.com/your-username/pos-master.git
   cd pos-master
   npm install
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

3. **Make Changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Test Your Changes**
   ```bash
   npm run test
   npm run lint
   npm run dev # Test in development
   ```

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   git push origin feature/your-feature-name
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add customer search functionality
fix: resolve cart calculation error
docs: update installation instructions
style: improve button hover effects
```

### Code Style Guidelines

1. **React Components**
   - Use functional components with hooks
   - Keep components small and focused
   - Use descriptive prop names
   - Implement proper error handling

2. **CSS/Tailwind**
   - Use utility classes when possible
   - Create custom components for reusable styles
   - Follow the established color palette
   - Ensure responsive design

3. **JavaScript**
   - Use ES6+ features
   - Implement proper error handling
   - Add JSDoc comments for complex functions
   - Follow the existing naming conventions

### Pull Request Guidelines

Before submitting a pull request:

1. **Ensure your code follows our style guidelines**
2. **Add tests for new functionality**
3. **Update documentation if needed**
4. **Test on multiple screen sizes**
5. **Check that all existing tests pass**

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Tested on different screen sizes
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description** - Clear description of the bug
2. **Steps to Reproduce** - Detailed steps to reproduce the issue
3. **Expected Behavior** - What you expected to happen
4. **Actual Behavior** - What actually happened
5. **Environment** - OS, Node.js version, browser, etc.
6. **Screenshots** - If applicable

## 💡 Feature Requests

We love feature suggestions! Please include:

1. **Problem Description** - What problem does this solve?
2. **Proposed Solution** - How should it work?
3. **Alternative Solutions** - Any alternative approaches?
4. **Additional Context** - Screenshots, mockups, etc.

## 📚 Documentation

- **API Documentation** - Available in `/docs/api`
- **Component Documentation** - Available in `/docs/components`
- **Deployment Guide** - Available in `/docs/deployment`

## 🚀 Deployment

### Building for Production

1. **Build React App**
   ```bash
   npm run build
   ```

2. **Package Electron App**
   ```bash
   npm run electron:pack
   ```

3. **Create Distributables**
   ```bash
   npm run dist
   ```

### Platform-Specific Builds

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

## 🔐 Security

If you discover a security vulnerability, please send an email to [ejaz.developer@example.com](mailto:ejaz.developer@example.com) instead of opening a public issue.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ejaz-developer">
        <img src="https://github.com/ejaz-developer.png" width="100px;" alt="Ejaz Developer"/>
        <br />
        <sub><b>Ejaz Developer</b></sub>
      </a>
      <br />
      <sub>💻 Project Creator & Maintainer</sub>
    </td>
  </tr>
</table>

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Electron Team** - For making desktop apps with web technologies possible
- **Tailwind CSS** - For the utility-first CSS framework
- **Heroicons** - For the beautiful SVG icons
- **Community Contributors** - For all the valuable feedback and contributions

## 📞 Support

- **GitHub Issues** - [Create an issue](https://github.com/ejaz-developer/pos-master/issues)
- **Email** - ejaz.developer@example.com
- **Documentation** - [Wiki](https://github.com/ejaz-developer/pos-master/wiki)

## 🗺️ Roadmap

### Version 2.0 (Planned)
- [ ] Cloud synchronization
- [ ] Multi-location support
- [ ] Advanced reporting dashboard
- [ ] Barcode scanning integration
- [ ] Receipt printer support
- [ ] Employee management system

### Version 1.5 (In Progress)
- [ ] Database integration
- [ ] Export functionality
- [ ] Customer loyalty program
- [ ] Inventory reorder alerts

### Version 1.0 (Current)
- [x] Basic POS functionality
- [x] Product management
- [x] Sales processing
- [x] Dashboard analytics
- [x] Customer management

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/ejaz-developer">Ejaz Developer</a></p>
  <p>
    <a href="https://github.com/ejaz-developer/pos-master/stargazers">⭐ Star this project</a> |
    <a href="https://github.com/ejaz-developer/pos-master/issues">🐛 Report Bug</a> |
    <a href="https://github.com/ejaz-developer/pos-master/issues">💡 Request Feature</a>
  </p>
</div>
