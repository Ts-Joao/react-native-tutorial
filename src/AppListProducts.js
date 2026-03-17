import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/TechShop/Header';
import ProductCard from './components/TechShop/Product';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cards}>
        <ProductCard
        image={'https://images8.kabum.com.br/produtos/fotos/520368/processador-amd-ryzen-5-5600gt-3-6-ghz-4-6ghz-max-turbo-cache-4mb-6-nucleos-12-threads-am4-100-100001488box_1708024586_gg.jpg'} 
        name={'AMD Ryzen 5 5600gt'}
        category={'Processador'}
        price={'R$ 849,99'}/>

        <ProductCard
        image={'https://images3.kabum.com.br/produtos/fotos/sync_mirakl/366243/xlarge/Placa-M-e-MSI-A520M-A-PRO-AMD-AM4-mATX-DDR4-HDMI-Gigalan_1770150858.jpg'} 
        name={'MSI A520M-A Pro'}
        category={'Placa Mãe'}
        price={'R$ 399,99'}/>

        <ProductCard
        image={'https://images5.kabum.com.br/produtos/fotos/369655/fonte-msi-mag-a600dn-atx-600w-80-plus-pfc-ativo-entrada-bivolt-preto-306-7zp6b22-809_1667475815_gg.jpg'} 
        name={'MSI MAG A600DN'}
        category={'Fonte'}
        price={'R$ 239,99'}/>
        
        <ProductCard
        image={'https://images9.kabum.com.br/produtos/fotos/921679/memoria-ram-kingston-fury-beast-8gb-3200mt-s-ddr4-cl16-dimm-preto-kf432c16bb-8wp_1758543897_gg.jpg'} 
        name={'Memória RAM Kingston Fury, 8GB, 3200mhz'}
        category={'Memória Ram'}
        price={'R$ 469,99'}/>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    justifyContent: 'center',
  }
});
