import os

# Configuration
media_folder = 'Media'
output_file = 'generated_media.txt'
# Supported image extensions
extensions = ('.png', '.jpg', '.jpeg', '.gif', '.webp')

def generate_media_list():
    if not os.path.exists(media_folder):
        print(f"Error: Folder '{media_folder}' not found.")
        return

    files = [f for f in os.listdir(media_folder) if f.lower().endswith(extensions)]
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("const mediaList = [\n")
        
        for i, filename in enumerate(files, 1):
            # Clean up filename for a default title (e.g., "raid_01.png" -> "Raid 01")
            default_title = os.path.splitext(filename)[0].replace('_', ' ').title()
            
            entry = (
                f'    {{\n'
                f'        id: "image{i}",\n'
                f'        title: "{default_title}",\n'
                f'        Source: "{media_folder}/{filename}",\n'
                f'        Description: "Add description here",\n'
                f'        tags: ["General"]\n'
                f'    }},\n'
            )
            f.write(entry)
        
        f.write("];")

    print(f"Successfully generated {len(files)} entries in {output_file}")

if __name__ == "__main__":
    generate_media_list()