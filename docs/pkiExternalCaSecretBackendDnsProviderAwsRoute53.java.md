# `pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53 <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_aws_route53.PkiExternalCaSecretBackendDnsProviderAwsRoute53;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identifiers(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .assumeRoleArn(java.lang.String)
//  .externalId(java.lang.String)
//  .hostedZoneId(java.lang.String)
//  .nameserver(java.lang.String)
//  .namespace(java.lang.String)
//  .region(java.lang.String)
//  .secretAccessKeyWo(java.lang.String)
//  .secretAccessKeyWoVersion(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.assumeRoleArn">assumeRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.nameserver">nameserver</a></code> | <code>java.lang.String</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWo">secretAccessKeyWo</a></code> | <code>java.lang.String</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWoVersion">secretAccessKeyWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.identifiers"></a>

- *Type:* java.util.List<java.lang.String>

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.accessKeyId"></a>

- *Type:* java.lang.String

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `assumeRoleArn`<sup>Optional</sup> <a name="assumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.assumeRoleArn"></a>

- *Type:* java.lang.String

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.hostedZoneId"></a>

- *Type:* java.lang.String

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.nameserver"></a>

- *Type:* java.lang.String

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.region"></a>

- *Type:* java.lang.String

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `secretAccessKeyWo`<sup>Optional</sup> <a name="secretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWo"></a>

- *Type:* java.lang.String

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `secretAccessKeyWoVersion`<sup>Optional</sup> <a name="secretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn">resetAssumeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver">resetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo">resetSecretAccessKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion">resetSecretAccessKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAssumeRoleArn` <a name="resetAssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn"></a>

```java
public void resetAssumeRoleArn()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId"></a>

```java
public void resetHostedZoneId()
```

##### `resetNameserver` <a name="resetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver"></a>

```java
public void resetNameserver()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretAccessKeyWo` <a name="resetSecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo"></a>

```java
public void resetSecretAccessKeyWo()
```

##### `resetSecretAccessKeyWoVersion` <a name="resetSecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion"></a>

```java
public void resetSecretAccessKeyWoVersion()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_aws_route53.PkiExternalCaSecretBackendDnsProviderAwsRoute53;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_aws_route53.PkiExternalCaSecretBackendDnsProviderAwsRoute53;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_aws_route53.PkiExternalCaSecretBackendDnsProviderAwsRoute53;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_aws_route53.PkiExternalCaSecretBackendDnsProviderAwsRoute53;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiExternalCaSecretBackendDnsProviderAwsRoute53 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput">assumeRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput">nameserverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput">secretAccessKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput">secretAccessKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn">assumeRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver">nameserver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo">secretAccessKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion">secretAccessKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `assumeRoleArnInput`<sup>Optional</sup> <a name="assumeRoleArnInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput"></a>

```java
public java.lang.String getAssumeRoleArnInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput"></a>

```java
public java.lang.String getNameserverInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyWoInput`<sup>Optional</sup> <a name="secretAccessKeyWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput"></a>

```java
public java.lang.String getSecretAccessKeyWoInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyWoVersionInput`<sup>Optional</sup> <a name="secretAccessKeyWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput"></a>

```java
public java.lang.Number getSecretAccessKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `assumeRoleArn`<sup>Required</sup> <a name="assumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn"></a>

```java
public java.lang.String getAssumeRoleArn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver"></a>

```java
public java.lang.String getNameserver();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### ~~`secretAccessKeyWo`~~<sup>Required</sup> <a name="secretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getSecretAccessKeyWo();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyWoVersion`<sup>Required</sup> <a name="secretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion"></a>

```java
public java.lang.Number getSecretAccessKeyWoVersion();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53Config <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_aws_route53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config;

PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identifiers(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .assumeRoleArn(java.lang.String)
//  .externalId(java.lang.String)
//  .hostedZoneId(java.lang.String)
//  .nameserver(java.lang.String)
//  .namespace(java.lang.String)
//  .region(java.lang.String)
//  .secretAccessKeyWo(java.lang.String)
//  .secretAccessKeyWoVersion(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name">name</a></code> | <code>java.lang.String</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn">assumeRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId">externalId</a></code> | <code>java.lang.String</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver">nameserver</a></code> | <code>java.lang.String</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region">region</a></code> | <code>java.lang.String</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo">secretAccessKeyWo</a></code> | <code>java.lang.String</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion">secretAccessKeyWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `assumeRoleArn`<sup>Optional</sup> <a name="assumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn"></a>

```java
public java.lang.String getAssumeRoleArn();
```

- *Type:* java.lang.String

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver"></a>

```java
public java.lang.String getNameserver();
```

- *Type:* java.lang.String

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `secretAccessKeyWo`<sup>Optional</sup> <a name="secretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo"></a>

```java
public java.lang.String getSecretAccessKeyWo();
```

- *Type:* java.lang.String

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `secretAccessKeyWoVersion`<sup>Optional</sup> <a name="secretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion"></a>

```java
public java.lang.Number getSecretAccessKeyWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---



