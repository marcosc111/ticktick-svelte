<script>
	import ProfilePicture from './profile-picture.svelte';
	import SvgIcon from './svg-icon.svelte';
</script>

<div class="flex-none max-w-[50px] w-[50px] min-h-screen">
	<div class="flex flex-col items-center w-[50px] pr-[1px] pb-[28px] min-h-screen bg-secondary">
		<ProfilePicture />
		<div class="flex-auto">
			<div class="mb-[20px]">
				<SvgIcon iconId="list-sidebar" active />
			</div>
			<div class="mb-[20px]">
				<SvgIcon iconId="calendar-sidebar" />
			</div>
			<div class="mb-[20px]">
				<SvgIcon iconId="search-sidebar" />
			</div>
		</div>
		<div class="flex-none">
			<div class="mb-[16px]">
				<SvgIcon iconId="notification-sidebar" />
			</div>
			<div>
				<SvgIcon iconId="question-sidebar" />
			</div>
		</div>
	</div>
</div>
