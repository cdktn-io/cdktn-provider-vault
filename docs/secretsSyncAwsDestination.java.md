# `secretsSyncAwsDestination` Submodule <a name="`secretsSyncAwsDestination` Submodule" id="@cdktn/provider-vault.secretsSyncAwsDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAwsDestination <a name="SecretsSyncAwsDestination" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination vault_secrets_sync_aws_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_aws_destination.SecretsSyncAwsDestination;

SecretsSyncAwsDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .allowedIpv4Addresses(java.util.List<java.lang.String>)
//  .allowedIpv6Addresses(java.util.List<java.lang.String>)
//  .allowedPorts(java.util.List<java.lang.Number>)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .externalId(java.lang.String)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudienceWo(java.lang.String)
//  .identityTokenAudienceWoVersion(java.lang.Number)
//  .identityTokenKeyWo(java.lang.String)
//  .identityTokenKeyWoVersion(java.lang.Number)
//  .identityTokenTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretAccessKey(java.lang.String)
//  .secretNameTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the AWS destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Access key id to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Allowed ports for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Extra protection that must match the trust policy granting access to the AWS IAM role ARN. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where to manage the secrets manager entries. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Specifies a role to assume when connecting to AWS. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Secret access key to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the AWS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.accessKeyId"></a>

- *Type:* java.lang.String

Access key id to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.allowedIpv4Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager.

Can also be set via an IP address range using CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#allowed_ipv4_addresses SecretsSyncAwsDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.allowedIpv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager.

Can also be set via an IP address range using CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#allowed_ipv6_addresses SecretsSyncAwsDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.allowedPorts"></a>

- *Type:* java.util.List<java.lang.Number>

Allowed ports for outbound connections from Vault to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#allowed_ports SecretsSyncAwsDestination#allowed_ports}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.customTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.disableStrictNetworking"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#disable_strict_networking SecretsSyncAwsDestination#disable_strict_networking}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Extra protection that must match the trust policy granting access to the AWS IAM role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.granularity"></a>

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudienceWo`<sup>Optional</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenAudienceWo"></a>

- *Type:* java.lang.String

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_audience_wo SecretsSyncAwsDestination#identity_token_audience_wo}

---

##### `identityTokenAudienceWoVersion`<sup>Optional</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenAudienceWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_audience_wo_version SecretsSyncAwsDestination#identity_token_audience_wo_version}

---

##### `identityTokenKeyWo`<sup>Optional</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenKeyWo"></a>

- *Type:* java.lang.String

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_key_wo SecretsSyncAwsDestination#identity_token_key_wo}

---

##### `identityTokenKeyWoVersion`<sup>Optional</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenKeyWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_key_wo_version SecretsSyncAwsDestination#identity_token_key_wo_version}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.identityTokenTtl"></a>

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_ttl SecretsSyncAwsDestination#identity_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where to manage the secrets manager entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Specifies a role to assume when connecting to AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretAccessKey"></a>

- *Type:* java.lang.String

Secret access key to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv4Addresses">resetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv6Addresses">resetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetDisableStrictNetworking">resetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWo">resetIdentityTokenAudienceWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWoVersion">resetIdentityTokenAudienceWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWo">resetIdentityTokenKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWoVersion">resetIdentityTokenKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAllowedIpv4Addresses` <a name="resetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv4Addresses"></a>

```java
public void resetAllowedIpv4Addresses()
```

##### `resetAllowedIpv6Addresses` <a name="resetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv6Addresses"></a>

```java
public void resetAllowedIpv6Addresses()
```

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedPorts"></a>

```java
public void resetAllowedPorts()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDisableStrictNetworking` <a name="resetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetDisableStrictNetworking"></a>

```java
public void resetDisableStrictNetworking()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity"></a>

```java
public void resetGranularity()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenAudienceWo` <a name="resetIdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWo"></a>

```java
public void resetIdentityTokenAudienceWo()
```

##### `resetIdentityTokenAudienceWoVersion` <a name="resetIdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWoVersion"></a>

```java
public void resetIdentityTokenAudienceWoVersion()
```

##### `resetIdentityTokenKeyWo` <a name="resetIdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWo"></a>

```java
public void resetIdentityTokenKeyWo()
```

##### `resetIdentityTokenKeyWoVersion` <a name="resetIdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWoVersion"></a>

```java
public void resetIdentityTokenKeyWoVersion()
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenTtl"></a>

```java
public void resetIdentityTokenTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey"></a>

```java
public void resetSecretAccessKey()
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate"></a>

```java
public void resetSecretNameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncAwsDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct"></a>

```java
import io.cdktn.providers.vault.secrets_sync_aws_destination.SecretsSyncAwsDestination;

SecretsSyncAwsDestination.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.secrets_sync_aws_destination.SecretsSyncAwsDestination;

SecretsSyncAwsDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.secrets_sync_aws_destination.SecretsSyncAwsDestination;

SecretsSyncAwsDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.secrets_sync_aws_destination.SecretsSyncAwsDestination;

SecretsSyncAwsDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsSyncAwsDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsSyncAwsDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsSyncAwsDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsSyncAwsDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncAwsDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4AddressesInput">allowedIpv4AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6AddressesInput">allowedIpv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPortsInput">allowedPortsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworkingInput">disableStrictNetworkingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoInput">identityTokenAudienceWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersionInput">identityTokenAudienceWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoInput">identityTokenKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersionInput">identityTokenKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `allowedIpv4AddressesInput`<sup>Optional</sup> <a name="allowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6AddressesInput`<sup>Optional</sup> <a name="allowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPortsInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableStrictNetworkingInput`<sup>Optional</sup> <a name="disableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworkingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworkingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoInput`<sup>Optional</sup> <a name="identityTokenAudienceWoInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoInput"></a>

```java
public java.lang.String getIdentityTokenAudienceWoInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoVersionInput`<sup>Optional</sup> <a name="identityTokenAudienceWoVersionInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersionInput"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identityTokenKeyWoInput`<sup>Optional</sup> <a name="identityTokenKeyWoInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoInput"></a>

```java
public java.lang.String getIdentityTokenKeyWoInput();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyWoVersionInput`<sup>Optional</sup> <a name="identityTokenKeyWoVersionInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersionInput"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtlInput"></a>

```java
public java.lang.Number getIdentityTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput"></a>

```java
public java.lang.String getSecretNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `allowedIpv4Addresses`<sup>Required</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6Addresses`<sup>Required</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableStrictNetworking`<sup>Required</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWo`<sup>Required</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWo"></a>

```java
public java.lang.String getIdentityTokenAudienceWo();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoVersion`<sup>Required</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersion"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersion();
```

- *Type:* java.lang.Number

---

##### `identityTokenKeyWo`<sup>Required</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWo"></a>

```java
public java.lang.String getIdentityTokenKeyWo();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyWoVersion`<sup>Required</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersion"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersion();
```

- *Type:* java.lang.Number

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAwsDestinationConfig <a name="SecretsSyncAwsDestinationConfig" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_aws_destination.SecretsSyncAwsDestinationConfig;

SecretsSyncAwsDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .allowedIpv4Addresses(java.util.List<java.lang.String>)
//  .allowedIpv6Addresses(java.util.List<java.lang.String>)
//  .allowedPorts(java.util.List<java.lang.Number>)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .externalId(java.lang.String)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudienceWo(java.lang.String)
//  .identityTokenAudienceWoVersion(java.lang.Number)
//  .identityTokenKeyWo(java.lang.String)
//  .identityTokenKeyWoVersion(java.lang.Number)
//  .identityTokenTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretAccessKey(java.lang.String)
//  .secretNameTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the AWS destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Access key id to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Allowed ports for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Extra protection that must match the trust policy granting access to the AWS IAM role ARN. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where to manage the secrets manager entries. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Specifies a role to assume when connecting to AWS. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Secret access key to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the AWS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Access key id to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager.

Can also be set via an IP address range using CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#allowed_ipv4_addresses SecretsSyncAwsDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager.

Can also be set via an IP address range using CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#allowed_ipv6_addresses SecretsSyncAwsDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

Allowed ports for outbound connections from Vault to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#allowed_ports SecretsSyncAwsDestination#allowed_ports}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#disable_strict_networking SecretsSyncAwsDestination#disable_strict_networking}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Extra protection that must match the trust policy granting access to the AWS IAM role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudienceWo`<sup>Optional</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWo"></a>

```java
public java.lang.String getIdentityTokenAudienceWo();
```

- *Type:* java.lang.String

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_audience_wo SecretsSyncAwsDestination#identity_token_audience_wo}

---

##### `identityTokenAudienceWoVersion`<sup>Optional</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWoVersion"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_audience_wo_version SecretsSyncAwsDestination#identity_token_audience_wo_version}

---

##### `identityTokenKeyWo`<sup>Optional</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWo"></a>

```java
public java.lang.String getIdentityTokenKeyWo();
```

- *Type:* java.lang.String

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_key_wo SecretsSyncAwsDestination#identity_token_key_wo}

---

##### `identityTokenKeyWoVersion`<sup>Optional</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWoVersion"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_key_wo_version SecretsSyncAwsDestination#identity_token_key_wo_version}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#identity_token_ttl SecretsSyncAwsDestination#identity_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where to manage the secrets manager entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Specifies a role to assume when connecting to AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

Secret access key to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}

---



