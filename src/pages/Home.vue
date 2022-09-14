<template>
    <div>
        <div class="page">
            <div class="page-text-container">
            <h1 class="font-serif" data-splitting>Playlist 2022</h1>
            </div>

            <!-- enter button -->
            <div class="page-button-container">
            <router-link to="/playlist" class="button font-serif">Enter</router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
    import { defineComponent } from 'vue';
    import { onMounted } from 'vue';
    import {gsap} from 'gsap';
    import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";


    const tl = gsap.timeline();

    const startAnimation = () => {
        tl.from('h1 .word', {duration: 1.2, y: 200, skewY:20, ease: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.1s', stagger: 0.3})
    }

    onMounted(() => {
Splitting();

        startAnimation();
    })
</script>

<style lang="scss" scoped>
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background: rgb(229, 231, 235);
        .page-text-container{
    height: min-content;
    overflow: hidden;
    h1{
            font-size: 5rem;
            color: #000;
            font-weight: 300;
        }
        }

        .page-button-container{
            margin-top: 2rem;
            .button{
                font-size: 1.5rem;
                padding: 1rem 2rem;
                background: #000;
                color: #fff;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover{
                    background: #fff;
                    color: #000;
                }
            }
        }
    }
</style>