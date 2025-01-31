import { _ as J } from "./index-CAdGajTq.js";
import {
  a as be,
  f as we,
  b as ke,
  c as qe,
  V as T,
} from "./VTextField-C1W9uRpE.js";
import { m as Ce, a as Ie, V as Z, f as Se } from "./forwardRefs-4syOH2-z.js";
import {
  p as Ue,
  a4 as ae,
  j as Qe,
  ab as xe,
  q as Ee,
  c as F,
  as as ee,
  v as x,
  w as oe,
  z as Pe,
  at as Fe,
  A as e,
  B,
  F as E,
  D as $e,
  au as je,
  H as u,
  I as z,
  J as l,
  L as $,
  S as k,
  M as V,
  Q as L,
  K as C,
  R as j,
  P as g,
  o as Ae,
} from "./index-C7jXg81h.js";
import { V as De } from "./VChip-D_ZD7wtx.js";
import { V as S, a as y } from "./VRow-DPRUVnFG.js";
import { V as G, h as I, i as M, j as Re } from "./VGrid-B1elj0Wo.js";
import { V as Te } from "./VContainer-COxZBLLn.js";
import { _ as se } from "./CodeHighlight-BWAf1a6O.js";
import { u as ne } from "./useQuestionsStore-Csg_IzN_.js";
import {
  V as Be,
  a as Le,
  b as Ne,
  c as Oe,
} from "./VExpansionPanels-D0P-_goW.js";
import { u as ie } from "./useQuizzesStore-BgftCzj1.js";
import { V as Me, c as te, a as O, b as le } from "./VList-BLDUHzcR.js";
import { V as Je } from "./VDialog-RlfR9ZS8.js";
import { V as He, b as Ge, c as Ke } from "./VCard-PzGifVhv.js";
import { V as ue } from "./VAlert-DxO0GYKQ.js";
import "./lazy-CmFuK5uI.js";
import "./VOverlay-D5SsAUIM.js";
import "./scopeId-CFdMVFIo.js";
const We = Ue(
    {
      chips: Boolean,
      counter: Boolean,
      counterSizeString: {
        type: String,
        default: "$vuetify.fileInput.counterSize",
      },
      counterString: { type: String, default: "$vuetify.fileInput.counter" },
      hideInput: Boolean,
      multiple: Boolean,
      showSize: {
        type: [Boolean, Number, String],
        default: !1,
        validator: (t) =>
          typeof t == "boolean" || [1e3, 1024].includes(Number(t)),
      },
      ...Ce({ prependIcon: "$file" }),
      modelValue: {
        type: [Array, Object],
        default: (t) => (t.multiple ? [] : null),
        validator: (t) => ae(t).every((o) => o != null && typeof o == "object"),
      },
      ...be({ clearable: !0 }),
    },
    "VFileInput"
  ),
  Xe = Qe()({
    name: "VFileInput",
    inheritAttrs: !1,
    props: We(),
    emits: {
      "click:control": (t) => !0,
      "mousedown:control": (t) => !0,
      "update:focused": (t) => !0,
      "update:modelValue": (t) => !0,
    },
    setup(t, o) {
      let { attrs: h, emit: v, slots: s } = o;
      const { t: p } = xe(),
        c = Ee(
          t,
          "modelValue",
          t.modelValue,
          (i) => ae(i),
          (i) => (!t.multiple && Array.isArray(i) ? i[0] : i)
        ),
        { isFocused: f, focus: n, blur: b } = Ie(t),
        q = F(() => (typeof t.showSize != "boolean" ? t.showSize : void 0)),
        m = F(() =>
          (c.value ?? []).reduce((i, _) => {
            let { size: A = 0 } = _;
            return i + A;
          }, 0)
        ),
        a = F(() => ee(m.value, q.value)),
        d = F(() =>
          (c.value ?? []).map((i) => {
            const { name: _ = "", size: A = 0 } = i;
            return t.showSize ? `${_} (${ee(A, q.value)})` : _;
          })
        ),
        w = F(() => {
          var _;
          const i = ((_ = c.value) == null ? void 0 : _.length) ?? 0;
          return t.showSize
            ? p(t.counterSizeString, i, a.value)
            : p(t.counterString, i);
        }),
        r = x(),
        P = x(),
        U = x(),
        re = F(() => f.value || t.active),
        K = F(() => ["plain", "underlined"].includes(t.variant));
      function H() {
        var i;
        U.value !== document.activeElement &&
          ((i = U.value) == null || i.focus()),
          f.value || n();
      }
      function de(i) {
        var _;
        (_ = U.value) == null || _.click();
      }
      function ce(i) {
        v("mousedown:control", i);
      }
      function me(i) {
        var _;
        (_ = U.value) == null || _.click(), v("click:control", i);
      }
      function pe(i) {
        i.stopPropagation(),
          H(),
          $e(() => {
            (c.value = []), je(t["onClick:clear"], i);
          });
      }
      return (
        oe(c, (i) => {
          (!Array.isArray(i) || !i.length) && U.value && (U.value.value = "");
        }),
        Pe(() => {
          const i = !!(s.counter || t.counter),
            _ = !!(i || s.details),
            [A, fe] = Fe(h),
            { modelValue: _t, ...ge } = Z.filterProps(t),
            ve = we(t);
          return e(
            Z,
            B(
              {
                ref: r,
                modelValue: c.value,
                "onUpdate:modelValue": (D) => (c.value = D),
                class: [
                  "v-file-input",
                  {
                    "v-file-input--chips": !!t.chips,
                    "v-file-input--hide": t.hideInput,
                    "v-input--plain-underlined": K.value,
                  },
                  t.class,
                ],
                style: t.style,
                "onClick:prepend": de,
              },
              A,
              ge,
              { centerAffix: !K.value, focused: f.value }
            ),
            {
              ...s,
              default: (D) => {
                let {
                  id: N,
                  isDisabled: R,
                  isDirty: W,
                  isReadonly: X,
                  isValid: _e,
                } = D;
                return e(
                  ke,
                  B(
                    {
                      ref: P,
                      "prepend-icon": t.prependIcon,
                      onMousedown: ce,
                      onClick: me,
                      "onClick:clear": pe,
                      "onClick:prependInner": t["onClick:prependInner"],
                      "onClick:appendInner": t["onClick:appendInner"],
                    },
                    ve,
                    {
                      id: N.value,
                      active: re.value || W.value,
                      dirty: W.value || t.dirty,
                      disabled: R.value,
                      focused: f.value,
                      error: _e.value === !1,
                    }
                  ),
                  {
                    ...s,
                    default: (he) => {
                      var Y;
                      let {
                        props: { class: ye, ...ze },
                      } = he;
                      return e(E, null, [
                        e(
                          "input",
                          B(
                            {
                              ref: U,
                              type: "file",
                              readonly: X.value,
                              disabled: R.value,
                              multiple: t.multiple,
                              name: t.name,
                              onClick: (Q) => {
                                Q.stopPropagation(),
                                  X.value && Q.preventDefault(),
                                  H();
                              },
                              onChange: (Q) => {
                                if (!Q.target) return;
                                const Ve = Q.target;
                                c.value = [...(Ve.files ?? [])];
                              },
                              onFocus: H,
                              onBlur: b,
                            },
                            ze,
                            fe
                          ),
                          null
                        ),
                        e("div", { class: ye }, [
                          !!((Y = c.value) != null && Y.length) &&
                            !t.hideInput &&
                            (s.selection
                              ? s.selection({
                                  fileNames: d.value,
                                  totalBytes: m.value,
                                  totalBytesReadable: a.value,
                                })
                              : t.chips
                              ? d.value.map((Q) =>
                                  e(
                                    De,
                                    { key: Q, size: "small", text: Q },
                                    null
                                  )
                                )
                              : d.value.join(", ")),
                        ]),
                      ]);
                    },
                  }
                );
              },
              details: _
                ? (D) => {
                    var N, R;
                    return e(E, null, [
                      (N = s.details) == null ? void 0 : N.call(s, D),
                      i &&
                        e(E, null, [
                          e("span", null, null),
                          e(
                            qe,
                            {
                              active: !!((R = c.value) != null && R.length),
                              value: w.value,
                              disabled: t.disabled,
                            },
                            s.counter
                          ),
                        ]),
                    ]);
                  }
                : void 0,
            }
          );
        }),
        Se({}, r, P, U)
      );
    },
  }),
  Ye = {
    props: { existingImageUrl: { type: String, default: "" } },
    data() {
      return { file: null, previewUrl: this.existingImageUrl || "" };
    },
    methods: {
      onFileChange(t) {
        const o = t.target.files[0];
        o
          ? ((this.file = o),
            (this.previewUrl = URL.createObjectURL(o)),
            console.log(URL.createObjectURL(o)),
            this.$emit("image-changed", o, this.previewUrl))
          : (this.previewUrl = this.existingImageUrl);
      },
    },
  };
function Ze(t, o, h, v, s, p) {
  return (
    u(),
    z(Te, null, {
      default: l(() => [
        e(
          Xe,
          {
            modelValue: s.file,
            "onUpdate:modelValue": o[0] || (o[0] = (c) => (s.file = c)),
            label: "Upload Image",
            accept: "image/*",
            "prepend-icon": "mdi-upload",
            outlined: "",
            onChange: p.onFileChange,
          },
          null,
          8,
          ["modelValue", "onChange"]
        ),
        s.previewUrl
          ? (u(),
            z(
              S,
              { key: 0 },
              {
                default: l(() => [
                  e(
                    y,
                    { cols: "12" },
                    {
                      default: l(() => [
                        e(
                          G,
                          {
                            src: s.previewUrl,
                            alt: "Image Preview",
                            "max-height": "300",
                          },
                          null,
                          8,
                          ["src"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ))
          : $("", !0),
      ]),
      _: 1,
    })
  );
}
const et = J(Ye, [
    ["render", Ze],
    ["__scopeId", "data-v-2031e260"],
  ]),
  tt = { class: "mb-3" },
  lt = { class: "mb-3" },
  at = { key: 0 },
  ot = {
    __name: "EditQuestions",
    setup(t) {
      const o = ne(),
        h = () => {
          o.questions.push({
            question: "",
            topic: "",
            options: [
              { option: "" },
              { option: "" },
              { option: "" },
              { option: "" },
              { option: "" },
            ],
            answer: "",
            code: null,
          });
        },
        v = async (f, n) => {
          console.log(`Deleting image at URL: ${f}`);
          try {
            const b = await fetch("http://127.0.0.1:5000/deleteImage", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(f),
            });
            if (b.ok) {
              const q = await b.json();
              console.log("Image deleted successfully:", q), c(n);
            } else {
              const q = await b.json();
              console.error("Failed to delete image:", q);
            }
          } catch (b) {
            console.error("An error occurred while deleting the image:", b);
          }
        },
        s = (f) => {
          o.deleteQuestion(f);
        },
        p = (f, n) => {
          o.questions[f].image_file = n;
        },
        c = (f) => {
          (o.questions[f].image_url = null), (o.questions[f].image_file = null);
        };
      return (f, n) => {
        const b = se,
          q = et;
        return (
          u(),
          z(
            Oe,
            { class: "mb-6" },
            {
              default: l(() => [
                e(
                  S,
                  { class: "w-100" },
                  {
                    default: l(() => [
                      e(
                        y,
                        { cols: "12", class: "w-100" },
                        {
                          default: l(() => [
                            e(
                              T,
                              {
                                variant: "outlined",
                                clearable: "",
                                modelValue: k(o).title,
                                "onUpdate:modelValue":
                                  n[0] || (n[0] = (m) => (k(o).title = m)),
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                (u(!0),
                V(
                  E,
                  null,
                  L(
                    k(o).questions,
                    (m, a) => (
                      u(),
                      z(
                        S,
                        { key: a, class: "mt-2 w-100" },
                        {
                          default: l(() => [
                            e(
                              y,
                              { cols: "11" },
                              {
                                default: l(() => [
                                  e(
                                    Be,
                                    { "bg-color": "grey-darken-3" },
                                    {
                                      default: l(() => [
                                        e(
                                          Le,
                                          {
                                            "expand-icon": "mdi-menu-down",
                                            color: "grey-darken-3",
                                          },
                                          {
                                            default: l(() => [
                                              C(j(m.question), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                        e(
                                          Ne,
                                          null,
                                          {
                                            default: l(() => [
                                              g("p", tt, [
                                                n[1] ||
                                                  (n[1] = g(
                                                    "strong",
                                                    null,
                                                    "Question:",
                                                    -1
                                                  )),
                                                e(
                                                  T,
                                                  {
                                                    modelValue:
                                                      k(o).questions[a]
                                                        .question,
                                                    "onUpdate:modelValue": (
                                                      d
                                                    ) =>
                                                      (k(o).questions[
                                                        a
                                                      ].question = d),
                                                    clearable: "",
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "onUpdate:modelValue",
                                                  ]
                                                ),
                                              ]),
                                              g("p", lt, [
                                                n[2] ||
                                                  (n[2] = g(
                                                    "strong",
                                                    null,
                                                    "Topic:",
                                                    -1
                                                  )),
                                                C(" " + j(m.topic), 1),
                                              ]),
                                              n[5] ||
                                                (n[5] = g(
                                                  "p",
                                                  { class: "mb-3" },
                                                  [
                                                    g(
                                                      "strong",
                                                      null,
                                                      "Options:"
                                                    ),
                                                  ],
                                                  -1
                                                )),
                                              (u(!0),
                                              V(
                                                E,
                                                null,
                                                L(
                                                  m.options,
                                                  (d, w) => (
                                                    u(),
                                                    z(
                                                      T,
                                                      {
                                                        key: w,
                                                        modelValue:
                                                          k(o).questions[a]
                                                            .options[w].option,
                                                        "onUpdate:modelValue": (
                                                          r
                                                        ) =>
                                                          (k(o).questions[
                                                            a
                                                          ].options[w].option =
                                                            r),
                                                        variant: "outlined",
                                                        clearable: "",
                                                        class: "w-100",
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                      ]
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                              n[6] ||
                                                (n[6] = g(
                                                  "p",
                                                  { class: "mb-3" },
                                                  [
                                                    g(
                                                      "strong",
                                                      null,
                                                      "Answer:"
                                                    ),
                                                  ],
                                                  -1
                                                )),
                                              e(
                                                T,
                                                {
                                                  modelValue:
                                                    k(o).questions[a].answer,
                                                  "onUpdate:modelValue": (d) =>
                                                    (k(o).questions[a].answer =
                                                      d),
                                                  variant: "outlined",
                                                  clearable: "",
                                                  class: "w-100",
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "onUpdate:modelValue",
                                                ]
                                              ),
                                              m.code
                                                ? (u(),
                                                  V("div", at, [
                                                    n[3] ||
                                                      (n[3] = g(
                                                        "p",
                                                        { class: "mb-3" },
                                                        [
                                                          g(
                                                            "strong",
                                                            null,
                                                            "Code:"
                                                          ),
                                                        ],
                                                        -1
                                                      )),
                                                    e(
                                                      T,
                                                      {
                                                        modelValue:
                                                          k(o).questions[a]
                                                            .code,
                                                        "onUpdate:modelValue": (
                                                          d
                                                        ) =>
                                                          (k(o).questions[
                                                            a
                                                          ].code = d),
                                                        variant: "outlined",
                                                        clearable: "",
                                                        class: "w-100",
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                      ]
                                                    ),
                                                    e(
                                                      b,
                                                      { code: m.code },
                                                      null,
                                                      8,
                                                      ["code"]
                                                    ),
                                                  ]))
                                                : $("", !0),
                                              n[7] ||
                                                (n[7] = g(
                                                  "p",
                                                  { class: "mb-3" },
                                                  [g("strong", null, "Image:")],
                                                  -1
                                                )),
                                              m.image_url
                                                ? (u(),
                                                  z(
                                                    S,
                                                    { key: 1 },
                                                    {
                                                      default: l(() => [
                                                        e(
                                                          y,
                                                          {
                                                            cols: "12",
                                                            class: "w-100",
                                                          },
                                                          {
                                                            default: l(() => [
                                                              e(
                                                                G,
                                                                {
                                                                  src:
                                                                    "" +
                                                                    m.image_url,
                                                                  "max-height":
                                                                    "400",
                                                                  width: "100%",
                                                                },
                                                                null,
                                                                8,
                                                                ["src"]
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        e(
                                                          y,
                                                          {
                                                            class:
                                                              "d-flex justify-start align-end",
                                                          },
                                                          {
                                                            default: l(() => [
                                                              e(
                                                                I,
                                                                {
                                                                  color:
                                                                    "red-lighten-2",
                                                                  class: "w-10",
                                                                  onClick: (
                                                                    d
                                                                  ) =>
                                                                    v(
                                                                      m.image_url,
                                                                      a
                                                                    ),
                                                                },
                                                                {
                                                                  default: l(
                                                                    () =>
                                                                      n[4] ||
                                                                      (n[4] = [
                                                                        C(
                                                                          "Delete Image"
                                                                        ),
                                                                      ])
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1032,
                                                                ["onClick"]
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ))
                                                : (u(),
                                                  z(
                                                    q,
                                                    {
                                                      key: 2,
                                                      existingImageUrl:
                                                        m.imageUrl,
                                                      onImageChanged: (d) =>
                                                        p(a, d),
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "existingImageUrl",
                                                      "onImageChanged",
                                                    ]
                                                  )),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                            e(
                              y,
                              {
                                cols: "1",
                                class: "d-flex align-top justify-center mt-1",
                              },
                              {
                                default: l(() => [
                                  e(
                                    I,
                                    {
                                      color: "red-lighten-2",
                                      class: "w-50",
                                      onClick: (d) => s(a),
                                    },
                                    {
                                      default: l(() => [
                                        e(M, {
                                          icon: "mdi-delete",
                                          color: "white",
                                        }),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick"]
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    )
                  ),
                  128
                )),
                e(S, null, {
                  default: l(() => [
                    e(
                      y,
                      { class: "d-flex justify-end mt-4" },
                      {
                        default: l(() => [
                          e(
                            I,
                            { color: "secondary", onClick: h },
                            {
                              default: l(
                                () => n[8] || (n[8] = [C("Add Question")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  st = J(ot, [["__scopeId", "data-v-2e515048"]]),
  nt = { key: 0, class: "text-overline text-secondary text-small published" },
  it = { key: 1, class: "text-overline text-uppercase text-grey published" },
  ut = { class: "mt-2" },
  rt = { class: "title ml-0 mt-2" },
  dt = { class: "answer" },
  ct = { key: 0 },
  mt = {
    __name: "Quiz",
    props: { quiz: Object },
    setup(t) {
      const o = t,
        h = x(null),
        v = x(!1),
        s = ie(),
        p = ne(),
        c = () => {
          (v.value = !0),
            p.setQuiz({
              title: o.quiz.title,
              questions: JSON.parse(JSON.stringify(o.quiz.questions)),
            });
        },
        f = () => {
          (v.value = !1),
            setTimeout(() => {
              p.clearQuiz(), (h.value = null);
            }, 300);
        },
        n = async () => {
          const m = {
            title: p.title,
            questions: JSON.parse(JSON.stringify(p.questions)),
            quiz_id: o.quiz.quiz_id,
            published: o.quiz.published,
          };
          try {
            if (
              !(
                await fetch(`/updateQuiz/${o.quiz.quiz_id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(m),
                })
              ).ok
            )
              throw new Error("Failed to update quiz in the database");
            s.updateQuiz(o.quiz.quiz_id, m),
              (h.value = null),
              p.questions.forEach((d) => {
                if (d.image_file) {
                  const w = new FormData();
                  w.append("image_file", d.image_file),
                    w.append("question_id", d.question_id),
                    fetch("/savePicture", { method: "POST", body: w })
                      .then((r) => r.json())
                      .then((r) => {
                        r.image_url
                          ? s.updateQuestionImageURL(
                              o.quiz.quiz_id,
                              d.question_id,
                              r.image_url
                            )
                          : console.error(
                              "No image_url returned for question:",
                              d.question_id
                            );
                      })
                      .catch((r) => {
                        console.error(
                          "Error uploading image for question:",
                          d.question_id,
                          r
                        );
                      });
                }
              }),
              (v.value = !1),
              p.clearQuiz();
          } catch (a) {
            console.error("Error updating quiz in the database:", a),
              (h.value = a.message);
          }
        },
        b = async (m) => {
          try {
            const a = await fetch(`/updateQuizStatus/${m}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ published: !s.getQuizById(m).published }),
            });
            if (!a.ok) throw new Error("Failed to update quiz status");
            const d = await a.json();
            console.log("Quiz status updated:", d), s.togglePublishedStatus(m);
          } catch (a) {
            console.error("Error updating quiz status:", a);
          }
        },
        q = async () => {
          if (confirm("Are you sure you want to delete this quiz?"))
            try {
              if (
                !(
                  await fetch(`/deleteQuiz/${o.quiz.quiz_id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                  })
                ).ok
              )
                throw new Error("Failed to delete quiz from the database");
              s.removeQuiz(o.quiz.quiz_id), f();
            } catch (a) {
              console.error("Error deleting quiz:", a), (h.value = a.message);
            }
        };
      return (m, a) => {
        const d = se,
          w = st;
        return (
          u(),
          z(
            S,
            { class: "d-flex" },
            {
              default: l(() => [
                e(
                  y,
                  { cols: "12", class: "d-flex mt-0 pb-0" },
                  {
                    default: l(() => [
                      t.quiz.published
                        ? (u(), V("p", nt, " published "))
                        : (u(), V("p", it, " unpublished ")),
                    ]),
                    _: 1,
                  }
                ),
                e(
                  y,
                  { cols: "10 pl-0 pt-0" },
                  {
                    default: l(() => [
                      e(Me, null, {
                        default: l(() => [
                          e(te, null, {
                            activator: l(({ props: r }) => [
                              e(
                                O,
                                B(r, {
                                  title: `Quiz: ${t.quiz.title}`,
                                  class: "title",
                                }),
                                null,
                                16,
                                ["title"]
                              ),
                            ]),
                            default: l(() => [
                              (u(!0),
                              V(
                                E,
                                null,
                                L(
                                  t.quiz.questions,
                                  (r) => (
                                    u(),
                                    z(
                                      te,
                                      { key: r.id, class: "divider" },
                                      {
                                        activator: l(({ props: P }) => [
                                          e(
                                            O,
                                            B({ ref_for: !0 }, P, {
                                              title: r.question,
                                            }),
                                            null,
                                            16,
                                            ["title"]
                                          ),
                                        ]),
                                        default: l(() => [
                                          e(
                                            O,
                                            { title: "Options" },
                                            {
                                              default: l(() => [
                                                e(le, {
                                                  class:
                                                    "border-opacity-50 mt-2",
                                                }),
                                                g("ul", ut, [
                                                  (u(!0),
                                                  V(
                                                    E,
                                                    null,
                                                    L(
                                                      r.options,
                                                      (P) => (
                                                        u(),
                                                        V(
                                                          "li",
                                                          {
                                                            key: P.option_id,
                                                            class:
                                                              "pl-0 ml-4 list-item",
                                                          },
                                                          j(P.option),
                                                          1
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]),
                                                e(le, {
                                                  class:
                                                    "border-opacity-50 mt-2",
                                                  color: "secondary",
                                                }),
                                                g("p", rt, [
                                                  a[3] ||
                                                    (a[3] = C(" Answer: ")),
                                                  g("span", dt, j(r.answer), 1),
                                                ]),
                                                r.code
                                                  ? (u(),
                                                    V("div", ct, [
                                                      a[4] ||
                                                        (a[4] = g(
                                                          "p",
                                                          {
                                                            class: "ml-0 mt-2",
                                                          },
                                                          "Code:",
                                                          -1
                                                        )),
                                                      e(
                                                        d,
                                                        { code: r.code },
                                                        null,
                                                        8,
                                                        ["code"]
                                                      ),
                                                    ]))
                                                  : $("", !0),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          r.image_url
                                            ? (u(),
                                              z(
                                                O,
                                                { key: 0, class: "mb-2" },
                                                {
                                                  default: l(() => [
                                                    a[5] ||
                                                      (a[5] = g(
                                                        "h3",
                                                        { class: "mb-2" },
                                                        "Image:",
                                                        -1
                                                      )),
                                                    e(
                                                      S,
                                                      null,
                                                      {
                                                        default: l(() => [
                                                          e(
                                                            y,
                                                            {
                                                              cols: "12",
                                                              class: "w-100",
                                                            },
                                                            {
                                                              default: l(() => [
                                                                e(
                                                                  G,
                                                                  {
                                                                    src:
                                                                      "" +
                                                                      r.image_url,
                                                                    "max-height":
                                                                      "400",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["src"]
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ))
                                            : $("", !0),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                e(
                  y,
                  { class: "align-top d-flex pt-0 mt-2", cols: "2" },
                  {
                    default: l(() => [
                      e(
                        I,
                        {
                          class: "ml-0 mr-2",
                          size: "large",
                          color: "secondary",
                          onClick: c,
                        },
                        {
                          default: l(() => [e(M, { icon: "mdi-pencil" })]),
                          _: 1,
                        }
                      ),
                      t.quiz.published
                        ? (u(),
                          z(
                            I,
                            {
                              key: 1,
                              color: "red-lighten-3",
                              size: "large",
                              onClick:
                                a[1] || (a[1] = (r) => b(t.quiz.quiz_id)),
                            },
                            {
                              default: l(() => [
                                e(M, {
                                  icon: "mdi-share",
                                  class: "invert-vertical",
                                }),
                              ]),
                              _: 1,
                            }
                          ))
                        : (u(),
                          z(
                            I,
                            {
                              key: 0,
                              class: "",
                              size: "large",
                              color: "primary",
                              onClick:
                                a[0] || (a[0] = (r) => b(t.quiz.quiz_id)),
                            },
                            {
                              default: l(() => [e(M, { icon: "mdi-share" })]),
                              _: 1,
                            }
                          )),
                    ]),
                    _: 1,
                  }
                ),
                e(
                  Je,
                  {
                    modelValue: v.value,
                    "onUpdate:modelValue":
                      a[2] || (a[2] = (r) => (v.value = r)),
                    persistent: "",
                    class: "w-75",
                  },
                  {
                    default: l(() => [
                      e(
                        He,
                        { title: `Edit Quiz: ${t.quiz.title}` },
                        {
                          default: l(() => [
                            e(Ge, null, {
                              default: l(() => [
                                e(w, { quiz: t.quiz }, null, 8, ["quiz"]),
                                e(S, null, {
                                  default: l(() => [
                                    h.value
                                      ? (u(),
                                        z(
                                          ue,
                                          {
                                            key: 0,
                                            type: "error",
                                            class: "ma-3",
                                          },
                                          {
                                            default: l(() => [
                                              C(j(h.value), 1),
                                            ]),
                                            _: 1,
                                          }
                                        ))
                                      : $("", !0),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }),
                            e(
                              Ke,
                              { class: "pr-6 pb-5" },
                              {
                                default: l(() => [
                                  e(S, null, {
                                    default: l(() => [
                                      e(
                                        y,
                                        {
                                          cols: "8",
                                          class: "d-flex align-start pl-6",
                                        },
                                        {
                                          default: l(() => [
                                            e(
                                              I,
                                              {
                                                variant: "elevated",
                                                color: "grey-darken-3",
                                                class: "w-33",
                                                onClick: q,
                                              },
                                              {
                                                default: l(
                                                  () =>
                                                    a[6] ||
                                                    (a[6] = [C("Delete Quiz")])
                                                ),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      e(
                                        y,
                                        {
                                          cols: "2",
                                          class: "d-flex align-center",
                                        },
                                        {
                                          default: l(() => [
                                            e(
                                              I,
                                              {
                                                onClick: f,
                                                variant: "elevated",
                                                color: "grey-darken-3",
                                                class: "w-100",
                                              },
                                              {
                                                default: l(
                                                  () =>
                                                    a[7] ||
                                                    (a[7] = [C("Cancel")])
                                                ),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      e(
                                        y,
                                        {
                                          cols: "2",
                                          class: "d-flex align-center",
                                        },
                                        {
                                          default: l(() => [
                                            e(
                                              I,
                                              {
                                                onClick: n,
                                                variant: "elevated",
                                                color: "primary",
                                                class: "w-100",
                                              },
                                              {
                                                default: l(
                                                  () =>
                                                    a[8] || (a[8] = [C("Save")])
                                                ),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  pt = J(mt, [["__scopeId", "data-v-f3e6a212"]]),
  ft = { key: 0, class: "d-flex justify-center align-center loader" },
  gt = { key: 1, class: "d-flex justify-center align-center" },
  vt = {
    __name: "quizzes",
    setup(t) {
      const o = ie(),
        h = x(o.quizzes),
        v = x(!1),
        s = x("");
      return (
        Ae(async () => {
          if (o.quizzes.length === 0) {
            (v.value = !0), (s.value = "");
            try {
              const p = await fetch("/getAllQuizzes", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              if (p.ok) {
                const c = await p.json();
                o.setQuizzes(c), (h.value = c);
              } else {
                const c = await p.json();
                s.value = "Failed to load quizzes: " + c.error;
              }
            } catch (p) {
              s.value = "Error fetching quizzes: " + p.message;
            } finally {
              v.value = !1;
            }
          }
        }),
        oe(
          () => o.quizzes,
          (p) => {
            h.value = p;
          }
        ),
        (p, c) => {
          const f = pt;
          return (
            u(),
            V("div", null, [
              c[0] || (c[0] = g("h1", { class: "mb-3" }, "Quizzes", -1)),
              v.value
                ? (u(),
                  V("div", ft, [
                    e(Re, {
                      color: "blue-lighten-3",
                      indeterminate: "",
                      size: 56,
                    }),
                  ]))
                : $("", !0),
              !v.value && s.value
                ? (u(),
                  V("div", gt, [
                    e(
                      ue,
                      { type: "error" },
                      { default: l(() => [C(j(s.value), 1)]), _: 1 }
                    ),
                  ]))
                : (u(!0),
                  V(
                    E,
                    { key: 2 },
                    L(
                      h.value,
                      (n) => (
                        u(),
                        z(f, { key: n.id, quiz: n, class: "" }, null, 8, [
                          "quiz",
                        ])
                      )
                    ),
                    128
                  )),
            ])
          );
        }
      );
    },
  },
  At = J(vt, [["__scopeId", "data-v-a7f70f33"]]);
export { At as default };
