# Will Walton's Career Roadmap - Project Overview

## Project Description
This project is a **career roadmap website** that showcases the professional journey of Will Walton. It highlights his key milestones, internships, and achievements from 2020 to 2025. The project is designed as an interactive experience, featuring a **winding roadmap**, animated car, and year markers that provide detailed descriptions of each milestone when clicked. The website is developed using **HTML**, **CSS**, and **JavaScript** with a focus on an engaging UI/UX experience. Additionally, we implemented **dark mode** toggle functionality for an improved viewing experience.

## Key Features
- **Interactive Winding Roadmap**: Users can click on year markers to view detailed descriptions of Will's professional milestones. Each year marker expands into an informative bubble with the details of that year.
- **Animated Car Icon**: A car moves along the roadmap to the selected year, providing a visual and engaging user experience.
- **Dark Mode Toggle**: Users can switch between light and dark themes for a more customized viewing experience.
- **Responsive Design**: The website is fully responsive, adapting to different screen sizes for a smooth experience on both desktop and mobile devices.
- **Resume Download**: A direct download link to Will Walton's resume is available to showcase professional skills.
- **LinkedIn and Instagram Integration**: Links are provided to Will's LinkedIn and Instagram profiles for further exploration of his work.

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling and layout, with an emphasis on modern, clean visuals.
- **JavaScript**: Interactive functionality, including animation of the car and dynamic display of year details.
- **AWS S3**: Hosting the website as a static website, providing scalability and reliability.
- **GitHub Actions**: Implemented a **CI/CD pipeline** that automates the deployment of changes to AWS S3.
- **AWS IAM Roles & OpenID Connect**: Secure access configuration for deployments, removing the need for long-term credentials.

## Project Components
### 1. HTML Structure
- **Header**: Contains the project title, description, and a dark mode toggle button.
- **Roadmap Container**: Displays the animated winding road with year markers for different milestones. Each year marker is clickable to show expanded career details.
- **Expandable Details**: Upon clicking a year marker, an informative bubble expands to provide more in-depth details of the specific year.
- **Social Media Integration**: Links to Will's **LinkedIn** and **Instagram** profiles, enabling further interaction and networking.

### 2. CSS Styling
- **General Styling**: Clean, modern design with **gradient background**, smooth transitions, and rounded corners for a professional look.
- **Dark Mode**: Added a **dark mode** theme that changes the website's colors for better readability at night or low-light conditions.
- **Animations**: The car icon and roadmap elements have animations such as **bouncing** and **expanding** effects to improve the user experience.

### 3. JavaScript Functionality
- **Year Navigation**: JavaScript is used to move the car icon to different year markers when a year is clicked. Each milestone has a corresponding data-year attribute to indicate which details to display.
- **Dark Mode Toggle**: JavaScript is used to add and remove the `dark-mode` class to the `body` element, changing the website's theme.
- **Social Media Event Listeners**: Links to share on LinkedIn and navigate to Instagram are handled through JavaScript event listeners.

### 4. Deployment and CI/CD
- **GitHub Actions Workflow**: A GitHub Actions pipeline is set up to automatically deploy the project to an **AWS S3 bucket** whenever new code is pushed to the `main` branch. This enables continuous integration and deployment, ensuring that the website is always up-to-date with the latest changes.
- **IAM Role for Deployment**: An **IAM Role** was configured to enable GitHub Actions to assume permissions securely via **OIDC**, which eliminates the need for hardcoded credentials and enhances security.

## Costs & Maintenance
- **AWS S3**: The cost for running the static website on AWS S3 is estimated to be **less than $5 per month**, depending on traffic and usage. The website uses the **AWS Free Tier** for the first year, covering most of the initial costs.
- **CloudFront (Optional)**: Adding CloudFront for improved performance globally is optional and could increase monthly costs slightly.
- **Monitoring Costs**: Monitor the usage via the **AWS Billing Dashboard** to ensure there are no unexpected charges.

## Future Improvements
- **Add Custom Domain**: To enhance professionalism, integrate a custom domain for the website.
- **Expand Features**: Additional features could include **analytics tracking** to see how often different parts of the roadmap are accessed.
- **Content Delivery Network (CDN)**: Integrate **CloudFront** to further enhance the website's performance and security.

## How to Run the Project Locally
1. **Clone the Repository**: Run the following command:
   ```sh
   git clone https://github.com/wwatncm3/will_walton_career_roadmap.git
   ```
2. **Navigate to Project Directory**:
   ```sh
   cd will_walton_career_roadmap
   ```
3. **Open the HTML File**:
   Open `index.html` in your preferred web browser to see the career roadmap in action.

## How to Contribute
If you would like to contribute to this project, please follow these steps:
1. **Fork the Repository**.
2. **Create a New Branch** for your feature or bug fix.
3. **Commit Your Changes** and open a **Pull Request**.

## Contact Information
- **LinkedIn**: [Will Walton III](https://www.linkedin.com/in/will-walton-iii-352402245/)

Feel free to reach out if you have any questions or suggestions regarding this project.
