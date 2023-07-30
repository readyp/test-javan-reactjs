import ItemInterface from "../../types/item.interface";

interface IncrementItemInterface {
  type: "INCREMENT ITEM";
  payload: number;
}

interface DecrementItemInterface {
  type: "DECREMENT ITEM";
  payload: number;
}

interface RemoveItemInterface {
  type: "REMOVE ITEM";
  payload: number;
}

interface CheckoutItemInterface {
  type: "CHECKOUT ITEM";
}

interface MoveToWishlistInterface {
  type: "WISHLIST ITEM";
  payload: number;
}

export type ActionType =
  | IncrementItemInterface
  | DecrementItemInterface
  | RemoveItemInterface
  | CheckoutItemInterface
  | MoveToWishlistInterface;

const initialState: ItemInterface[] = [
  {
    id: 100,
    color: "blue",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGBgaHCQcGRocHRoaGh4hHCEcHx4eHiEcIS4lJB4rHx4hJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQhJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQ8AugMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEMQAAEDAQQGBwQIBgIBBQAAAAEAAhEDBCExQRJRYXGB8AUGIpGhscETMpLRB0JSYqKy4fEUIyRTcoI0wrMVFiUzc//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAgMBAQADAAAAAAAAAAECEQMxITJBElEiQnH/2gAMAwEAAhEDEQA/APX0IQgBCEIAQhCAEIQgBCFHttsZSbp1HtY3WfIZk7AgJCFlbR14oA9hj6gmNICG8Ik+ATX/AL2B92zk73gebVX4y/if1i16FkW9d252d8fdcH8bgrTozrPZq7tBry15wY4aJJ1DKdkouNnwTKVdIQhSoIQhACEIQAhCEAIQhACEIQAhCEAIQhACEKut3Tdno3PqtDvsjtO+FslEmwsV5n1/tZqVS1p7NEhsYjSMlx74b/qri39dzhQpX/aqahjDWnV95ZKlVOm7Th2kTpSJBJMyeK248L3WeWU6UzK5MgmSMLzG669ODpAQAGOGsdrbdcplvtz2uLR2fARkRGSzlbph7S90OIa4jS0omNkTxReSwTGVcttRIPZdG3SHncnLJXc5we2QaZ0mm64gggiBr8kzZukX/adfx4BW9pJIAOP1o2buKrG3JNkxetWS0B7GPGD2hw/2AKdWI6A60U6NNlGq2oImHhoc0AkmLjpXbAVrbF0hSqiadRr9YabxvGI4rHLGxpMpUpCEKVBCEIAQhCAEIQgBCEIAQhYzp7raO1Ts40snVMtujGP+XdOKqY3K6iblMe2g6Q6doUToudL/ALDRpO4xcOJCpLV1teZFKmG/ef2j8DD6rLOYeyQSbtgwuyxm+ZXWvdBGC1x459Rc/wCJ9tt9aoIqVXu1sB0GHZ2MeIKgsYBcGjzPjdlq1p1xvnnNce2Bw+a0mMiP1TDmidImL+F+Kjvs7gSe8HXn4qXUpdkg4EX9yeDS68iQbyTF09qdkEp+JR3FVUpB40XhwGThi39NizFq6EtTBoNYHse657JMgkG9uWRvwnFae29MMptPs2+3eMGgywE3AucMROQ7wnH2p7aemHt9q8Mc4OcG6EQXMY0EiMWkQZgrPOTKrxthno7o80xpP9/Vk35u25KZoTBORnaU1Y+k2VTo3MqXSwzDrgewTjiLjfdniprWO08MMsCII/birx1J4Rd2+UStRe46gLhuF2XelNoC66HDBwkR6+KdpNdECYgY4pL2OlOBZWTp200/dqh4H1X9r8Uh3iriz9dWi6tQey+NJpD274MEDvWTdSOXMLnaBiZUXjlOZWPT+j+k6NcTSqNdrAucN7TeOIUxeTUdIODm9lwwc0lhHFuC1PQ3WwA+ytEggwKmIxuDtUYaXfGKyy47Omkyn1sELgK6s1hCEIAQhIr1Wsa57jDWgucdQAk+CAy3XbpYtaKDDBeJedTcm/7Z7BtWQos55ySbXbTVrGq767pIOQyHAQOCKdUFxB4Lrwx/M05sr+rtOB7LQLrjeRtGvjgusaIGHgm3GWiI1YHfniusdfB5uTkGz7mCCOb025sm+BkmyDEC6/d5JWlv9cNqNUeCajZv1ekpFexipAqOc8RDWkkMuiLhdOUqRo+A9EprpjZenobN0rO1ggNAEYAAa049oLBJ2xfm4pRIg8UB7Cxwc15lgDC10Na7W8YEd+7MLLwc8q+12Ok46LmAxB2zAMzjqTtkL2SCfaMwGn77DeB2vrDfftXfZ3m68/IfJPFlx51p6lhbuyQ6IGrHwXHOEzzekk3nf8l3TjURM4X3Sbr0WFtwU8dnoVx7DM7F3TPhs+SVpREnLWeckeRuE0SQ4Qc8YkZ6t3BR3sDhOZ8U7ozM7OcDko+neRmMd6U7O9NZ1K6XJmzvOAmmTqGLOAvGyRkFsV5DStRY9lRnvMdpcWwY3GY3FetWau17GvaZa9oc3cRIWHLjq7/rXjy3NHEIQsmgVD12tGhZHgYvLWji4E/hBV8sb9Ilbs0Kf2nlx/1GiPzqsJuxOV/xrGFksInD1z8FAtFpLXhxwee54GG5wvG4qwa+Libj2fC7naoNppBwcxw7Jy3YEHIjEHWF1VhFvZ7TpN24x4FSmOBnZ8llOhrW4Ocx/vMuP3gfddsmIO1X7KmYzCJ0L2mRB4ylU3SJ2KO2vN0p1j8uCZH9PLm9JAvO75fJMioCcRindfFALaZkb0tghgEZa4z1Qo7Tfhl80898Bvai6YjXBnGSlezhsuxz8cl1pu4Lj3Ak5xH5RzwSXPg9yc6K9uZb/wBU3eedy7VqYLjH4pkAukTCS+okF6A5VrBuOY2bNaqv4kgQL3vJInDWST9kZnzKX0nX0ZJwAAzvJujbu2hRqDCAS73nROxv2R6nM8IV7VOk2mLsZEY5u1k6pPmvReotq07MGk3se5vA9ofmI4LzukyTOQ9FrPo6r9qqzW0O+Ekf9lHJN4qwusm7QhC5W4Xnv0hVf6ik37LQfie6fyhehLzHr7Um0uH2WtH4Q7/sr4/ZGfSptNKZ3Ktt9QtDH/6u33wVbB0iec1WWlgc1zD9YeN3qumsYpbe6HNrNN7TfGbZ7QPC/eAtJZ7RcM/HG7zWXsdbS06Tvei6Vd2Cp2GjA6InXgPVKHV1ScRgRcBdF94GM4GDltTumXAEnDacwoTbUwxDCJEEjRM4XnBWNis4cQA9oaSJcbg3C92oYlLx9Pz8Js0/acLwbjv54J6zNLngl7zfrnPaCotqeKbi2dN0w0Ng6YH1gTgz7x7imBaqxINzBODQCe9wJ7ozRqXqDdl807Za+nBIi7zU+mGFnbJD9BmhAbBdnpzfoxF4OvYFBpUw0XTzCktpjRZdNwGF3fxVZfE4k6UTw/KE0x+mHEH3XDy+Y8VypTvcMMD+FqiPD2Bzqbm3m8OEzc3Xdki9HO01j3Zkdw+XMLjZvwMnaqyl0xou0azND77CXN4tN44E4YK6pUwaWm17HXgACe0CSJBwuzGI7pW59Hn4iV3u0bmCdYu+aRMCdmHf4J6ramNuMzqbJj08VAtFrBMCcIv2Y775TnZZdKO2WjTtGjqNw1mBLu6BwKsWHSJ1ZbVRdGUSatWoc3Oa3Y0Ej0hX1EXDnBKU7Fg53YcecFc9QHRaTqNMjxDv+qoKzuxGsq86lP8A6lm3Sn4HfJGXrRj7PTEIQuR0BeVdc77XVP3gPwM+S9VXlvW5v9VX2OafwMPqtOLtHJ0qaLpY3u7rlGre8Tzmed6eswxG31Tdqw7yuhix3SbvZWlrsiRO43FaWmOee9ZzrXeGHO8K/szpYw/dHkJUY92KvUqbRd+mrm4qwpNPvBxBBMRIVfQbjfF3lPzU6g+WHf5/urSl0KYbLsXOMucbyTvOS7I54pqi++DzguscZIjm9MFgHx8v2T7T2WHRHujMbFGaYE7D5lPiyOc1z23tpsaX9pogHSAhuZu2JW9bEnZuoL3cNn1WpLLxBEDS17BCSIM/tkF0ADfPzR8hfajW2yNe0ghNWWh7IFrXP7Q7V5g4HDDLwU95uTRZMnnBGj2jPF+MXXZKG9t8bVMBvkCb9aiPfAJ2IhVXNeA7RG88ZPqrGicucFUWX3dJW1gMm/L9koqn8SAr3qb/AMunvcPwVFSgdqdUeivuprZtbDtf4Mf80ZetGPs9MQhC5HQF5Z1nfpWq0jU9n5GN9F6mvIul6oNttO1zm/Dd6LXi7Z8nSFSuc7embcbt36JVF15Gf7qPbauPFbsmS6yPmAr+wuPs2f4jyCznWA4K/wCjXfymH7oHgs8farvqtLLUbPann0U6kQAY1jbduVVTYVLMnA5+K0sRFmGgc7JQHkgjGRGrH13pii+6Tie/BO07gAiT+jZ0TdrMkxt/dK0Q5rCZPZbEgXGBgSOYTJGB4Jxg7DJn3G/Wj6oyRRHGP7ThzgNSUDr+fPBNMAD3cPFjUsOiD3+ietwb8uvZOexcLOycp46k094gHAz8kiq7Ueb0vI8EOAjAYgzn3Qq62QGOnUT4Kc+7ncqm3v7D5+yR3iEQqjPOjTaNYVh0ZfO0nzlVHSToDBuVr0SZbO1TO1XpZPu8Fe9SP+Sz/c/hKz73Y7Fc9Un6Nrs4+1pg8WOjyCeXrSx7j1JCELkdIXifSL/6us7XWf4vcvbAvDbc6aj3a3ud3vcteLus+Ry2v0Hg5OVLbbUZgLQ2+y6dJpzF/cqF1ATrK2rOKLpMaTScxfwV10E/SoN2XeCr+mYa0huLrjuzUvqvRIs5eTc6o5o3sbTJ/OFE9lf6r6zDnwTzMlGoFS7M3E6gtUJLWXgJYTYd5/JD3XoI8T80lz2AMlsnRaMvsi7K+9JE5avRTaVrLaZYCNF7GteCJMRI0SYg46/AFKqiE83uui8eTfklnBN1GCXcPIJLiRHOtE6Te3aw7OGoqMDgpJM3c4qPVu5w5hMOPd5Kq6Q9xw1uaO9zVYPPkoFuHZ08AHtnxPoleh9VfSr+23cPVWPQloERq+agWd/tS92Qub4qdZ6AEOmDn4KIurYOLrhmVZdDPi22b/MD4uyoVgZF5T9ldo2mzu1VWH8YlVl0mdvY0IQuR0uheFhstBOfrJ9V7k50AnVevE6bZawfdErXi+s8/h+yOlg2Km6Vs5aS5uBVxZMCOebk1b29k7vRb68MoxVek5x2TmFq+hbJHR7nAXNtjmg/5UaZP5Qs5abRokwF6T0XZI6CpuIgueam/TqOa0/AWrK9xfys5TbzzvUyziJ2pim2D4p9mEras4dGHH1SmU75yj9UMbPfKUx+HOpAJfhu/VOaBLWyDECJB1RrwTNTO/CfVSg0aDbj7rb7hlvSvw4htmXbxs+q3WukYruhe46yPyt+aBq2pzoXs2Lr9aaqDx/VLYZXXtlBIUpnpSlNhtTxix1F3Bz3s/7KXVZq1Kf0dYvaWHpRpExQY8Z30zVeI2y0KM/EqsfOUYfoF/ZIzn5LRWGzTecBhzzgsn0G/tzkt7QbAG4eHJRieRQF3CfBMOJFWmZwLT3OlTH3ABQLYYfOYF3C9VUR7aUIKFxuomt7rtx8l4zZmXDcF7FbHxTedTHHuBXkVmPZA5wW3F9Zcnw1TbDztXbUy4jXPqn6wgg84rldnZJ2rdkwPSjgzSJxkgcF7T0/T9h0XZ6MQQ2kzi1mkfFnivIbXYfa2qlRye9jD/u4B35l7T9IhH8PTF8+1BbGxj/CD5LG+0jWetYJlO7nWnHNuu5wXKWaWzOeZWzNxp711xMiOcF1jRMoqXngPVEIl2HOpSmlmi/SDw7QaaOiwaJfF+mTlhhFxdnCjBqfZJayACNBuY1eASyh4o98unZ+Vq61t3OxdqOvO8DXgB6J4jHjz4Jzor2hC65ONcl1GDHcmQcc0AhzZv71f/R1Wa60Wqg+P5lFhjWGue1//kaqAYxzepnUt+h0nSP9xr2cC0vHiwKM5vGqxvmMD0XZyyq6mfeY7RO9roPktxSExzqWdttm0OkrUzVWe7g55c3wcFp6LYExlPgjDoZ9lPGG9V9u+sdQPkrJwvjJQrezsu/xPkqS9oQuMwG5dXG6kLpp0WaudVJ35HLyujcvU+m/+PX/APyf+UrywCABnjz4Lfi6rHk7P2hkpt/uiU6c9ybtDeyY5n91szUnVqy+06VoCJh4edns2uePFoW6+kG16VVlIfUaXHe7DuDfxKl+jaw6XSFWplTpRxqOgfhY7vCd6zOJtlcn7QHc1oHgFljN5/8AF3xir2jGObwnAdWoeqQJF3y2LlMGePqfmtUHmtu4rrGSZ4J1nzQTF21Mkd5j1Umiw+zYST7rbriMG6lEqsU8Wdzqb3NI/l02veC4NuOGjiSbj4ZmFOXhWPlXMHacMrjnnCkRB55zTIPbI/XJpmeKfN92yE50V7JeyZUZzIPPOSmaPkmLQw3lBIz2YHgnuin6Nrs7hiKrBwe4MPg4oc3Liiwt/n0I/us/O1KzcOXyi9bLKW9L2mcHhjxxY0fmae5T2DyjwKsvpC6P0bbTrT/9lLRjbScZPEPb3KuZgpw6i8+wcTzzikuo6b2M+29rPiIb6pZZ8lN6Dp6dqoNxAfpfAC7zCrLxETt6eUIQuN1GbbZxUpvYfrtc34gR6ryV4PZxBgA7CDB4r2BebdY7LoWio1sXnTaP873D4p8Ftw3zYy5J9VTDLTzzglvb2eCg2uuNB8XOwI1SkBz9BjHXFo7WwkzHARdvW8Y3prPoxon2lrf9U+zYN7Q8nwcO9VHTxm014/uEfDcVffRWQaNpIw/iCJ3U6P6rN2x4dXqvBkOe5w4uJHgs8Pe1pl4xkNvaTBGafY0c70Blw3rrGmPHuWqCphNPOB2/NOuxSdARvCZENOfOSdrAFrOzMNBBLZjAXE+SinDh6hSnN7LDBPZiRgN9/opvZwzUEPO7Zl+yW0HnikvbN+okee1PU4jnWU50V7cGQ2QkPEp5owG5By3ICE9h8EilUDajH5Ne126HA+ilPbgVVdKOhjyPsuI3iUBtvpIsx07NVGDdNh3u0HN8GOWeYy7v8oW665aP8L2hJ026M68z8Ol3rz7TJDmD3tF0bbpHy4rLivhfJPJx9QAbTeM1e9SqE2kE/UY93ElrfUrL2S8NB4Lb9R2TUrO+y1rR/sXE/lVZ+tGE/wAmxQhC5HQFj+u1laX033hxaQTEghpBHHtHw2LYLI9dZ06R+64eLOeCvj9kZ+rLWjokOe2oDeAboF8REycWk6vBVvStkqCk72bgDBnSxzM3E3xOOpXjmkAbAoVop9hzfukd/Piunyw8NF1TsQo9DOh2k59GpUecO25pBbvbAbvaVlKYgdy3vVey/wDxjGAe9Tfdte558ysPRbd5KOH6rk+JLG3Hb8ks485yhjTcBq+S42Ynb81qhwi9dIwXeOfohwvTCM5mHOCfIOiw9uIGExzimni/v+akPMMbjEa9k6rsVN7OI7Hy5wO/XcRr9Eqkbxzq+abYe2R91viL+KUWeESnOivZd/guuHPeiL/FAxzTBt2GGCg25gLXA6jO4qe7CdZUG0iQecggm263VHVOjadZrZP8qoWyJIeA0xN0jTngsdZ6DiA8jRIMtkycuYWw6y0TTsNmpgxBptN8XNpu772hUFBkgAOGeeu9YcW9NeTW1c2yva9zyOzMMi+JAJ7iSOC3nUiho0nuIvc+ODWgeZcs1XJDNfa0tfmtp1Xc42Zhd96N2kYRyW/kYSfpbIQhc7cLJddBD6JyIcO4tPqtaqLrNYX1PZlrS7Q0pAiSXaIESRGd+SrC6yTlNxk3TjHdHqolUzkrc2C06Q/pHRtqUzhnhnPglU+g7Q4dqz6JP36d2rAXro/eLH81p+q7IslEfd8ySsJ0lY/ZVXsgwHGNxvaZzkeq9G6Ns/s6TGHFrQFG6X6JZXAm5wwdszadbfJY4Z/nKtcsd4vPz+iW3COcFOtvQVVmkSwkRi3ti6+brxdrChhhGWzjmuiZSsLjYQW3+XgkPbt5vS6sj6rp3O27E0+dR7jwVbhappxnu9E846TGSXAlgMA7B97bsXX0uzEGYnEYd+xDiQxkUX6WiATAGjcDGtTcoqSmgO1pcDnh6J+BftEd6apk3yCCLzpXG/DE6k81pIEDVkTknLNJsuyS0IYIS20zjB7jd4JbWxdGM7PNPcGqjPGOxO9GWE1arGxi7wxd3AHwUmnYnvMMaSTqExvyA271rugeh/YgvfBe4QYwaJJgazrOwalnnnJFY4W1X9e2yynq0ifw/qszZjv71settkc+m3RaToukwCSBByAJx1BZVjQwmdIYe814yvxZsU8dmlZy7FYGCth1SJNkpz9/87ljX1mHs6bQTkSRj/kAP3C13VBpFnDTi1zvGHDhely2WDjmsl4hCFg3CEIQAhCEAIQhACarWVj/AH2MdvaD5p1CAiHoyj/aZ8I1z53ob0ZQF/sWfA35KWhPdLUR/wCCp/22fA35Jf8ACs+wz4R8k6hGz0ZfZGEQWMI2tafRMnoqh/aZ8IHkpiEbpaiH/wClUP7TL8bkpvRtIYUmfCFKQj9UajjWgCAABqFy6hCRhEoQgG6lBjveY128A+aUymBgANwjAR5ADglIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEB//2Q==",
    name: "Blue denim shirt",
    price: 17.99,
    size: "m",
    tag: ["shirt", "blue"],
    count: 1,
  },
  {
    id: 101,
    color: "red",
    image:
      "data:image/jpeg;base64,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",
    name: "Red hoodie",
    price: 35.99,
    size: "m",
    tag: ["hoodie", "red"],
    count: 1,
  },
];

const shoppingCartReducer = (state: ItemInterface[] = initialState, action: ActionType): ItemInterface[] => {
  switch (action.type) {
    case "INCREMENT ITEM": {
      const item = state.find((cart) => cart.id === action.payload);
      if (!item) {
        return state;
      }
      const updatedItem: ItemInterface = { ...item, count: item.count + 1 };
      return state.map((cart) => (cart.id === updatedItem.id ? updatedItem : cart));
    }
    case "DECREMENT ITEM": {
      const item = state.find((cart) => cart.id === action.payload);
      if (!item) {
        return state;
      }
      const updatedItem: ItemInterface = { ...item, count: item.count - 1 };
      return state.map((cart) => (cart.id === updatedItem.id ? updatedItem : cart));
    }
    case "REMOVE ITEM":
      return state.filter((cart) => cart.id !== action.payload);
    case "CHECKOUT ITEM":
      return [];
    case "WISHLIST ITEM":
      return state.filter((cart) => cart.id !== action.payload);
    default:
      return state;
  }
};

export default shoppingCartReducer;
