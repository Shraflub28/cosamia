import os
import urllib.request
import json
from time import sleep

# Create the directory structure if it doesn't exist
def ensure_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

# Main function to download placeholder images
def download_placeholders():
    # Ensure directory exists
    placeholder_dir = 'assets/images/placeholder'
    ensure_dir(placeholder_dir)
    
    # Dictionary of image filenames and their search terms
    image_map = {
        # Food Items
        'pizza.jpg': 'pizza',
        'pizza-margherita.jpg': 'margherita pizza',
        'pizza-pepperoni.jpg': 'pepperoni pizza',
        'pizza-veggie.jpg': 'vegetable pizza',
        'pizza-bbq.jpg': 'bbq chicken pizza',
        'burger.jpg': 'hamburger',
        'burger-classic.jpg': 'classic burger',
        'cheeseburger.jpg': 'cheeseburger',
        'burger-chicken.jpg': 'chicken burger',
        'burger-double.jpg': 'double burger',
        'pasta.jpg': 'pasta dish',
        'pasta-bolognese.jpg': 'spaghetti bolognese',
        'pasta-alfredo.jpg': 'fettuccine alfredo',
        'pasta-arrabbiata.jpg': 'pasta arrabbiata',
        'tacos.jpg': 'chicken tacos',
        'tacos-beef.jpg': 'beef tacos',
        'tacos-shrimp.jpg': 'shrimp tacos',
        'tacos-veggie.jpg': 'vegetarian tacos',
        'fries.jpg': 'french fries',
        'onion-rings.jpg': 'onion rings',
        'mozzarella-sticks.jpg': 'mozzarella sticks',
        'garlic-bread.jpg': 'garlic bread',
        'tiramisu.jpg': 'tiramisu dessert',
        'cheesecake.jpg': 'new york cheesecake',
        'chocolate-cake.jpg': 'chocolate lava cake',
        'ice-cream.jpg': 'gelato ice cream',
        'dessert.jpg': 'gourmet dessert',
        'soda.jpg': 'soda drinks',
        'juice.jpg': 'fresh fruit juice',
        'smoothie.jpg': 'fruit smoothie',
        'coffee.jpg': 'cappuccino coffee',
        'drinks.jpg': 'beverage selection',
        
        # Restaurant
        'restaurant.jpg': 'modern restaurant',
        'restaurant-interior.jpg': 'restaurant interior',
        'restaurant-seating.jpg': 'restaurant seating area',
        'restaurant-counter.jpg': 'restaurant counter',
        'restaurant-kitchen.jpg': 'restaurant kitchen',
        'restaurant-staff.jpg': 'restaurant staff',
        
        # Events
        'event1.jpg': 'restaurant event',
        'event2.jpg': 'food event',
        'event3.jpg': 'dining event',
        'event4.jpg': 'catering event',
        
        # Headers
        'menu-header.jpg': 'food menu header',
        'gallery-header.jpg': 'restaurant gallery'
    }
    
    print("Starting download of placeholder images...")
    
    # Using Unsplash API for demonstration (you would need an API key in a real scenario)
    # In this example, we'll use their source API which allows a limited number of downloads
    for image_name, search_term in image_map.items():
        target_path = os.path.join(placeholder_dir, image_name)
        
        # Skip if the file already exists
        if os.path.exists(target_path):
            print(f"Skipping {image_name} - already exists")
            continue
        
        # Format the search term for the URL
        formatted_search = search_term.replace(' ', '+')
        
        # Using Unsplash Source API
        url = f"https://source.unsplash.com/featured/?{formatted_search}"
        
        try:
            print(f"Downloading {image_name} from search term '{search_term}'...")
            
            # Download the image
            urllib.request.urlretrieve(url, target_path)
            
            print(f"Downloaded {image_name} successfully!")
            
            # Sleep to avoid hitting rate limits
            sleep(1)
            
        except Exception as e:
            print(f"Error downloading {image_name}: {e}")
    
    print("\nDownload complete!")
    print("If some images weren't downloaded successfully, you may need to:")
    print("1. Check your internet connection")
    print("2. Try running the script again")
    print("3. Or manually download images from Unsplash/Pexels/Pixabay as mentioned in the README")

if __name__ == "__main__":
    download_placeholders() 