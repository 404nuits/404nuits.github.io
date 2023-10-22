import os, json
from PIL import Image

def check_dir(mode):

    dirpath = os.path.dirname(__file__) + "/public/images/" + mode
    filepath = os.path.dirname(__file__) + "/src/jsons/" + mode + ".json"

    files_in_dir = os.listdir(dirpath)
    files_in_dir.remove("thumbs")

    f = open(filepath)
    files_in_list = json.load(f)
    f.close()

    registered_files = [f["name"] for f in files_in_list if f["name"] in files_in_dir]
    new_files = [f for f in files_in_dir if f not in registered_files]
    deleted_files = [f["name"] for f in files_in_list if f["name"] not in files_in_dir]

    for file in new_files:

        image = Image.open(dirpath + '/' + file)

        # --- Image size ---
        w, h = image.size

        # --- Image thumbnail ---
        t_h = 700
        t_w = round(w*t_h/h)

        image.thumbnail((t_w, t_h))
        thumb_name = file[:-4] + "_thumb.jpg"
        image.save(dirpath+ '/thumbs/'+ thumb_name)

        # --- Prompt location ---

        new_file = {
            "src": "/images/"+mode+"/"+file,
            "thumb": "/images/"+mode+"/thumbs/"+thumb_name,
            "alt": file,
            "location": "",
            "width": w,
            "height": h,
            "name": file
        }

        files_in_list.append(new_file)

    # Serializing json
    json_object = json.dumps(files_in_list, indent=4)
    
    # Writing to sample.json
    with open(filepath, "w") as out:
        out.write(json_object)

if __name__ == '__main__':
    mode = input("photos / designs : ")
    if mode in ["photos", "designs"]:
        check_dir(mode)
