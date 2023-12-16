<script setup>
const props = defineProps({
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    iconSrc: {
        type:String,
    },
    desc: {
        type: String
    }

})
</script>

<template>
    <div class="timeline-card">
        <div class="timeline-timespan">{{startDate}} - {{endDate}}</div>
        <div class="timeline-icon">
            <div class="timeline-dot"></div>
            <img :src="iconSrc" alt="D-Soft">
        </div>
        <div class="timeline-desc">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.timeline-card {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    font-family: sans-serif;
    line-height: 1.4;
}
.timeline-timespan {
    grid-column: span 2;
    font-size: 0.8rem;
    text-align: right;
    padding-right: 5px;
    color: #bbb;
}
.timeline-icon {
    grid-column: span 3;
    vertical-align: top;
    border-left: 2px solid #cfcfcf;
    position: relative;
    padding-bottom: 1rem;
    margin-left: 6px;
}
.timeline-dot {
    position: absolute;
    top: 0px;
    left: -7px;
    width: 8px;
    height: 8px;
    border-radius: 7px;
    background-color: #cfcfcf;
    border: 2px solid white;
}
.timeline-icon img {    
    border-radius: 5px;
    width: 100%;
    /* max-width: 100px; */
    margin-left: 10px;
    margin-top: -4px;
    /* background-color: #fff; */
}
.timeline-desc {
    grid-column: span 19;
    vertical-align: top;
    font-size: 1rem;
    padding-left: 20px;
    padding-bottom: 20px;
    text-align: justify;
    hyphens: auto;
    margin-top: -2px;
}

@media (max-width: 600px) {
    .timeline-icon {
        grid-column: span 6;
    }
    .timeline-desc {
        grid-column: span 16;
    }
    .timeline-timespan {
        font-size: 0.6rem;
    }
}

@media (max-width: 700px) {
    .timeline-icon {
        grid-column: span 5;
    }
    .timeline-desc {
        grid-column: span 17;
    }
}
</style>