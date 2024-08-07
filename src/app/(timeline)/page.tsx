import PostEditor from "@/components/posts/editor/post-editor";

export default function Timeline() {
  return (
    <main className="top-[5.25rem] flex h-[200vh] w-full justify-center bg-red-50 font-sans">
      <div className="w-full">
        <PostEditor />
      </div>
    </main>
  );
}
