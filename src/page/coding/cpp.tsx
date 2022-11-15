import styled from "styled-components";
import { FC } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/mode/css/css";
const CppContent = styled.div``;
import For from "@/modules/loop/for";
const Cpp: FC<{}> = ({}) => {
  return (<>
    <CppContent>
      <CodeMirror
        value={
          `// you only need to define the configuration settings you want to CHANGE. Omitted properties won't be affected.\ngsap.config({\n  autoSleep: 60,\n  force3D: false,\n  nullTargetWarn: false,\n  trialWarn: false,\n  units: {left: "%", top: "%", rotation: "rad"}\n});`
        }
        options={{
          mode: "javascript",
          lineNumbers: true,
          theme: "material",
        }}
      />
      <For
        data={{
          init: "init",
          condition: "condition",
          increment: "increment",
          content: [
            {
              init: "init",
              condition: "condition",
              increment: "increment",
              content: [
                {
                  init: "init",
                  condition: "condition",
                  increment: "increment",
                  content: [
                    {
                      init: "init",
                      condition: "condition",
                      increment: "increment",
                      content: [
                        {
                          init: "init",
                          condition: "condition",
                          increment: "increment",
                          content: [
                            {
                              init: "init",
                              condition: "condition",
                              increment: "increment",
                              content: [
                                {
                                  init: "init",
                                  condition: "condition",
                                  increment: "increment",
                                  content: [
                                    {
                                      init: "init",
                                      condition: "condition",
                                      increment: "increment",
                                      content: [
                                        {
                                          init: "init",
                                          condition: "condition",
                                          increment: "increment",
                                          content: [
                                            {
                                              init: "init",
                                              condition: "condition",
                                              increment: "increment",
                                              content: [
                                                {
                                                  init: "init",
                                                  condition: "condition",
                                                  increment: "increment",
                                                  content: [
                                                    {
                                                      init: "init",
                                                      condition: "condition",
                                                      increment: "increment",
                                                      content: [
                                                        {
                                                          init: "init",
                                                          condition: "condition",
                                                          increment: "increment",
                                                          content: [
                                                            {
                                                              init: "init",
                                                              condition: "condition",
                                                              increment: "increment",
                                                              content: "",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }}
      />
    </CppContent>
  </>
  );
};

export default Cpp;
