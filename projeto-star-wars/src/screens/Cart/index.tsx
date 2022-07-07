import React, { useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { StarshipModal } from "../../components/modais/StarshipModal";
import { ContextCart } from "../../context/CartContext";
import { starship } from "../LojaNaves";
import { CartStarShips } from "../../components/Ships";
import { styles } from "./styles";

export const Cart = () => {

    const [indexStarShips, setIndexStarShips] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);
    const [valor, setValor] = useState<string>();

    const listStarShip = useContext(ContextCart).listStarship;
    const valorTotal = useContext(ContextCart).valorTotal

    return <View style={styles.container}>
        <Text style={styles.text}>
            Carrinho
        </Text>
        <FlatList
            data={listStarShip}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <Text style= {{color: "white"}}>{item.name}</Text>
/*                 <CartStarShips
                    item={item}
                    setValor={setValor}
                    setModal={setModal}
                    setIndexStarShips={setIndexStarShips}
                    cart={true}
                /> */
            )
            }
        />
        {modal &&
            <StarshipModal
                indexStarShips={indexStarShips}
                modal={modal}
                setModal={setModal}
                valor={valor}
                cart={true} item={undefined} />
        }
        <Text style={styles.text}>
            Valor Total: {valorTotal}
        </Text>
    </View>
}
