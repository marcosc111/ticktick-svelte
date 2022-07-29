<script>
	function dragStart(e) {
		e.dataTransfer.setDragImage(e.target, window.outerWidth, window.outerHeight);
	}
		
	function handleDrag(e) {
		if (!e.clientX)
			return;
		let p = e.clientX/window.innerWidth;
		document.getElementById('detail-view').style.width = ((1-p)*100) + '%';
	}
</script>

<div id="detail-view" class="flex-none h-full flex flex-row min-w-[350px] max-w-[900px]" style="width: 50%;">
	<div
		draggable="true"
		class="flex-none w-[5px] h-full hover:cursor-ew-resize"
		on:drag={handleDrag}
		on:dragstart={dragStart}
	/>
	<div class="flex-auto h-full flex flex-row items-center border-l-[1px] border-solid border-info-gray">
		<div class="flex-auto w-full flex flex-col items-center">
			<div class="empty-icon relative flex justify-center">
				<svg class="w-[160px] h-[160px]">
					<use xlink:href="#empty-task-detail" />
				</svg>
				<svg class="w-full h-full absolute left-0 top-0 fill-primary">
					<use xlink:href="#empty-task-detail-pointer" />
				</svg>
			</div>
			<span
				class="flex justify-center py-0 px-[24px] mt-[33px] w-full text-center text-[16px] text-extra"
				>Click task title to view the detail</span
			>
		</div>
	</div>
</div>
