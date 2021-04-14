<template>
    <Header></Header>
    <Container>
        <StationList></StationList>
        <figure class="station__wrap">
            <img
                src="https://curiodyssey.org/wp-content/uploads/bb-plugin/cache/Mammals-Raccoon-square.jpg"
                alt=""
                class="station__cover"
            />
            <figcaption class="station__title">Название</figcaption>
        </figure>
    </Container>
    <Footer></Footer>
</template>

<style lang="scss">
.station__cover {
    width: 280px;
    height: 280px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 2px solid #445a65;
}
.station__title {
    color: #fff;
}
</style>

<script>
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StationList from "@/components/StationList";

export default {
    components: {
        Container,
        Header,
        Footer,
        StationList,
    },
};
</script>
