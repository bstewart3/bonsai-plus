import AuthCheck from "../../components/AuthCheck";
import { auth, firestore, serverTimestamp } from "../../lib/firebase";
import styles from "../../styles/Admin.module.css";

import { useRouter } from "next/router";
import { useState } from "react";

import { useForm } from "react-hook-form";

import { useDocumentData } from "react-firebase-hooks/firestore";

export default function AdminPostEdit(props) {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  );
}

function PostManager() {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("posts")
    .doc(slug);
  const [post] = useDocumentData(postRef);

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm
              postRef={postRef}
              defaultValues={post}
              preview={preview}
            />
          </section>
        </>
      )}
    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });
    TransformStream.success("Post updated successfully");
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <textarea name="content" ref={register}></textarea>

        <fieldset
          className={styles.checkbox}
          name="published"
          type="checkbox"
          ref={register}
        >
          <label>Published</label>
        </fieldset>

        <button type="submit" className="btn-green">
          Save Changes
        </button>
      </div>
    </form>
  );
}
