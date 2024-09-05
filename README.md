# Foodiolla

**Foodiolla** is a web-based platform that allows users to explore and compare restaurant menus across popular food delivery platforms such as Zomato, Uber Eats, and Swiggy. By aggregating restaurant menu data and displaying price comparisons, Foodiolla helps users make informed decisions when ordering food online, ensuring they get the best deal for their favorite meals.

## Key Features:
- **Restaurant Data Aggregation**: Collects menu information from multiple restaurants.
- **Price Comparison**: Displays and compares the prices of the same menu items across Zomato, Uber Eats, and Swiggy.
- **User-Friendly Interface**: Easy-to-navigate design for users to search for restaurants and items seamlessly.
- **Cost-Saving Tool**: Helps users find the most affordable options across different platforms.

## Technologies Used:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python
- **API Integration**: Swiggy and Zomato APIs
- **Database**: MySQL

## How It Works:
1. Users search for a restaurant or menu item.
2. Foodiolla collects data from multiple platforms in real time using the Swiggy and Zomato APIs.
3. Price comparisons are displayed side-by-side to help users choose the best option.

## Installation and Setup:
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/foodiolla.git
    ```
2. Navigate into the project directory:
    ```bash
    cd foodiolla
    ```
3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Set up the MySQL database:
    - Create a MySQL database.
    - Update the database connection details in the configuration file.

5. Run the application:
    ```bash
    python app.py
    ```

## Future Improvements:
- Add user reviews and ratings.
- Include more delivery platforms.
- Implement filters for dietary preferences.

## License:
This project is licensed under the MIT License.
