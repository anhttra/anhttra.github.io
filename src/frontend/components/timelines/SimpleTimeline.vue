<script setup>
</script>

<template>
    <ul class="timeline">
        <li class="timeline-item">
            <div class="timeline-info"><span>March 12, 2016</span></div>
        </li>
    </ul>

</template>

<style>
/*==================================
    TIMELINE
==================================*/

/*-- GENERAL STYLES
------------------------------*/
.timeline {
    line-height: 1.4em;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.timeline h1, h2, h3, h4, h5, h6 {
    line-height: inherit;
}

/*----- TIMELINE ITEM -----*/

.timeline-item {
    padding-left: 40px;
    position: relative;
}

.timeline-item &:last-child {
    padding-bottom: 0;
}

    
</style>