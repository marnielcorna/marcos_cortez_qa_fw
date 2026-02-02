# QA Framework
Applicant: Marcos Cortez

This project is a basic QA automation framework built using **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern.

### Technologies
* **Node.js**
* **Playwright**
* **TypeScript**
* **ESLint**
* **dotenv**

### Prerequisites

Make sure you have the following installed:

* **BesCity** application must be initialized:
    * **Repo**: https://bitbucket.org/0xb2tirios/bestcity-mvp/src/main/
* **Node.js** (v18 or higher recommended)
* **npm** (comes with Node.js)


### Installation

1. Clone the repository:

```bash
git clone https://github.com/marnielcorna/marcos_cortez_qa_fw.git
cd marcos_cortez_qa_fw
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```


### Environment configuration

Create a `.env` file in the root of the project:

```env
BASE_URL=http://localhost:3000
```
**Note**: Change the value in case the Tirios application is initialized in different port.


### Run all tests

```bash
npm run tests
```

### Test Reports

After test execution, generate and open the HTML report:

```bash
npm run report
```