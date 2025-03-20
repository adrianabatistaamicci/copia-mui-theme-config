import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Typography } from "@mui/material";
import ThreadBoxDocuments, { ThreadBoxDocumentsProps } from "../ThreadBoxDocuments";
import { ThreadCommentProps } from "../ThreadComment";
import { useState } from "react";
interface IListDocument {
  name: string;
}
interface IDocumentThread {
  id: number;
  title?: string;
  date?: string;
  sentDate?: string;
  comment?: React.ReactNode;
  fileSize?: string;
  createdBy?: string;
  isActive?: boolean;
  atattachmentUrl?: string;
  attatchmentName?: string;
  attachmentDescription?: string;
  showInputMessage?: boolean;
  showMessageCollapse?: boolean;
}

export interface ThreadTimelineProps {
  onSubmitMessage?: (message: string) => void;
  onClickCollapse?: (threadId: number) => void;
  onDownloadFile?: () => void;
  setComment?: (comment: string) => void;
  inputMessage?: string;
  loading?: boolean;
  threadComments?: Array<{
    id: number;
    historyComments?: Array<ThreadCommentProps>;
  }>;
  documentThread: Array<IDocumentThread>;
  listDocuments?: Array<IListDocument>;
  threadBoxDocumentsProps?: (thread: IDocumentThread) => Partial<ThreadBoxDocumentsProps>;
  threadCommentProps?: (
    comment: ThreadCommentProps
  ) => Partial<ThreadCommentProps>;
}

const ThreadTimelineDocuments = ({
  loading,
  documentThread,
  listDocuments,
  onClickCollapse,
  onSubmitMessage,
  setComment,
  inputMessage,
  onDownloadFile,
  threadComments = [],
  threadBoxDocumentsProps,
  threadCommentProps,
}: ThreadTimelineProps) => {
  const getThreadBoxDocumentsProps = (thread: IDocumentThread) =>
    threadBoxDocumentsProps ? threadBoxDocumentsProps(thread) : {};

  const [expanded, setExpanded] = useState<number | false>(
    documentThread ? documentThread[0].id : false
  );

  const handleChange = (panel: number) => {
    if (panel === expanded) {
      setExpanded(false);
    } else {
      setExpanded(panel);
    }
  };

  return (
    <Timeline
      sx={{
        padding: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {documentThread.map((thread) => (
        <TimelineItem key={thread.id}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          {/* O TimelineContente não aceita a curstomização sem o SX ainda */}
          <TimelineContent sx={{ paddingLeft: 4, paddingRight: 0 }}>
            <Typography>{thread.date}</Typography>
            <ThreadBoxDocuments
              loading={loading}
              threadId={thread.id}
              createdBy={thread.createdBy}
              sentDate={thread.sentDate}
              message={thread.comment}
              fileSize={thread.fileSize}
              title={thread.title}
              attachmentDescription={thread.attachmentDescription}
              attachmentName={thread.attatchmentName}
              attachmentUrl={thread.atattachmentUrl}
              showInputMessage={thread.showInputMessage}
              inputMessage={inputMessage}
              setComment={setComment}
              onDownloadFile={onDownloadFile}
              showMessageCollapse={
                !thread.showInputMessage && thread.showMessageCollapse
              }
              historyComments={
                threadComments?.find((comment) => comment.id === thread.id)
                  ?.historyComments
              }
              isActive={thread.isActive}
              onClickCollapse={onClickCollapse}
              onSubmitMessage={onSubmitMessage}
              threadCommentProps={threadCommentProps}
              handleChange={handleChange}
              expanded={expanded}
              listDocuments={listDocuments}              
              {...getThreadBoxDocumentsProps(thread)}
            />
          </TimelineContent>
        </TimelineItem>
      ))}

      <TimelineSeparator>
        <TimelineDot variant="outlined" />
      </TimelineSeparator>
    </Timeline>
  );
};

export default ThreadTimelineDocuments;
