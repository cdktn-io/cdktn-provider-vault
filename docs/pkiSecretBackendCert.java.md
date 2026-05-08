# `pkiSecretBackendCert` Submodule <a name="`pkiSecretBackendCert` Submodule" id="@cdktn/provider-vault.pkiSecretBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCert <a name="PkiSecretBackendCert" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_cert.PkiSecretBackendCert;

PkiSecretBackendCert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .commonName(java.lang.String)
    .name(java.lang.String)
//  .altNames(java.util.List<java.lang.String>)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .certMetadata(java.lang.String)
//  .excludeCnFromSans(java.lang.Boolean|IResolvable)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .ipSans(java.util.List<java.lang.String>)
//  .issuerRef(java.lang.String)
//  .minSecondsRemaining(java.lang.Number)
//  .namespace(java.lang.String)
//  .notAfter(java.lang.String)
//  .otherSans(java.util.List<java.lang.String>)
//  .privateKeyFormat(java.lang.String)
//  .removeRootsFromChain(java.lang.Boolean|IResolvable)
//  .revoke(java.lang.Boolean|IResolvable)
//  .revokeWithKey(java.lang.Boolean|IResolvable)
//  .ttl(java.lang.String)
//  .uriSans(java.util.List<java.lang.String>)
//  .userIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.commonName">commonName</a></code> | <code>java.lang.String</code> | CN of the certificate to create. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative names. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.certMetadata">certMetadata</a></code> | <code>java.lang.String</code> | A base 64 encoded value or an empty string to associate with the certificate's serial number. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format of data. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative IPs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.minSecondsRemaining">minSecondsRemaining</a></code> | <code>java.lang.Number</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.notAfter">notAfter</a></code> | <code>java.lang.String</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | List of other SANs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.privateKeyFormat">privateKeyFormat</a></code> | <code>java.lang.String</code> | The private key format. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.removeRootsFromChain">removeRootsFromChain</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the returned ca_chain field will not include any self-signed CA certificates. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revoke">revoke</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revokeWithKey">revokeWithKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Revoke the certificate with private key method upon resource destruction. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative URIs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | List of Subject User IDs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.commonName"></a>

- *Type:* java.lang.String

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.altNames"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `certMetadata`<sup>Optional</sup> <a name="certMetadata" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.certMetadata"></a>

- *Type:* java.lang.String

A base 64 encoded value or an empty string to associate with the certificate's serial number.

The role's no_store_metadata must be set to false, otherwise an error is returned when specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#cert_metadata PkiSecretBackendCert#cert_metadata}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ipSans"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.issuerRef"></a>

- *Type:* java.lang.String

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `minSecondsRemaining`<sup>Optional</sup> <a name="minSecondsRemaining" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.minSecondsRemaining"></a>

- *Type:* java.lang.Number

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.notAfter"></a>

- *Type:* java.lang.String

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#not_after PkiSecretBackendCert#not_after}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.otherSans"></a>

- *Type:* java.util.List<java.lang.String>

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.privateKeyFormat"></a>

- *Type:* java.lang.String

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `removeRootsFromChain`<sup>Optional</sup> <a name="removeRootsFromChain" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.removeRootsFromChain"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the returned ca_chain field will not include any self-signed CA certificates.

Useful if end-users already have the root CA in their trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#remove_roots_from_chain PkiSecretBackendCert#remove_roots_from_chain}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revoke"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `revokeWithKey`<sup>Optional</sup> <a name="revokeWithKey" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revokeWithKey"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Revoke the certificate with private key method upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#revoke_with_key PkiSecretBackendCert#revoke_with_key}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.uriSans"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.userIds"></a>

- *Type:* java.util.List<java.lang.String>

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetCertMetadata">resetCertMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef">resetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining">resetMinSecondsRemaining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNotAfter">resetNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat">resetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRemoveRootsFromChain">resetRemoveRootsFromChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke">resetRevoke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevokeWithKey">resetRevokeWithKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans">resetUriSans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds">resetUserIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAltNames` <a name="resetAltNames" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames"></a>

```java
public void resetAltNames()
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetCertMetadata` <a name="resetCertMetadata" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetCertMetadata"></a>

```java
public void resetCertMetadata()
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans"></a>

```java
public void resetExcludeCnFromSans()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId"></a>

```java
public void resetId()
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans"></a>

```java
public void resetIpSans()
```

##### `resetIssuerRef` <a name="resetIssuerRef" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef"></a>

```java
public void resetIssuerRef()
```

##### `resetMinSecondsRemaining` <a name="resetMinSecondsRemaining" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining"></a>

```java
public void resetMinSecondsRemaining()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNotAfter` <a name="resetNotAfter" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNotAfter"></a>

```java
public void resetNotAfter()
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans"></a>

```java
public void resetOtherSans()
```

##### `resetPrivateKeyFormat` <a name="resetPrivateKeyFormat" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat"></a>

```java
public void resetPrivateKeyFormat()
```

##### `resetRemoveRootsFromChain` <a name="resetRemoveRootsFromChain" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRemoveRootsFromChain"></a>

```java
public void resetRemoveRootsFromChain()
```

##### `resetRevoke` <a name="resetRevoke" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke"></a>

```java
public void resetRevoke()
```

##### `resetRevokeWithKey` <a name="resetRevokeWithKey" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevokeWithKey"></a>

```java
public void resetRevokeWithKey()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans"></a>

```java
public void resetUriSans()
```

##### `resetUserIds` <a name="resetUserIds" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds"></a>

```java
public void resetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendCert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_cert.PkiSecretBackendCert;

PkiSecretBackendCert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_cert.PkiSecretBackendCert;

PkiSecretBackendCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_cert.PkiSecretBackendCert;

PkiSecretBackendCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_cert.PkiSecretBackendCert;

PkiSecretBackendCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiSecretBackendCert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain">caChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration">expiration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa">issuingCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType">privateKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending">renewPending</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput">altNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadataInput">certMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput">ipSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput">issuerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput">minSecondsRemainingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfterInput">notAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput">otherSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput">privateKeyFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.removeRootsFromChainInput">removeRootsFromChainInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput">revokeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKeyInput">revokeWithKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput">uriSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput">userIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadata">certMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining">minSecondsRemaining</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat">privateKeyFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.removeRootsFromChain">removeRootsFromChain</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke">revoke</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKey">revokeWithKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caChain`<sup>Required</sup> <a name="caChain" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain"></a>

```java
public java.lang.String getCaChain();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration"></a>

```java
public java.lang.Number getExpiration();
```

- *Type:* java.lang.Number

---

##### `issuingCa`<sup>Required</sup> <a name="issuingCa" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa"></a>

```java
public java.lang.String getIssuingCa();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType"></a>

```java
public java.lang.String getPrivateKeyType();
```

- *Type:* java.lang.String

---

##### `renewPending`<sup>Required</sup> <a name="renewPending" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending"></a>

```java
public IResolvable getRenewPending();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput"></a>

```java
public java.util.List<java.lang.String> getAltNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenewInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `certMetadataInput`<sup>Optional</sup> <a name="certMetadataInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadataInput"></a>

```java
public java.lang.String getCertMetadataInput();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeCnFromSansInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput"></a>

```java
public java.util.List<java.lang.String> getIpSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput"></a>

```java
public java.lang.String getIssuerRefInput();
```

- *Type:* java.lang.String

---

##### `minSecondsRemainingInput`<sup>Optional</sup> <a name="minSecondsRemainingInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput"></a>

```java
public java.lang.Number getMinSecondsRemainingInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `notAfterInput`<sup>Optional</sup> <a name="notAfterInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfterInput"></a>

```java
public java.lang.String getNotAfterInput();
```

- *Type:* java.lang.String

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput"></a>

```java
public java.util.List<java.lang.String> getOtherSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyFormatInput`<sup>Optional</sup> <a name="privateKeyFormatInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput"></a>

```java
public java.lang.String getPrivateKeyFormatInput();
```

- *Type:* java.lang.String

---

##### `removeRootsFromChainInput`<sup>Optional</sup> <a name="removeRootsFromChainInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.removeRootsFromChainInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveRootsFromChainInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revokeInput`<sup>Optional</sup> <a name="revokeInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput"></a>

```java
public java.lang.Boolean|IResolvable getRevokeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revokeWithKeyInput`<sup>Optional</sup> <a name="revokeWithKeyInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getRevokeWithKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput"></a>

```java
public java.util.List<java.lang.String> getUriSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userIdsInput`<sup>Optional</sup> <a name="userIdsInput" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput"></a>

```java
public java.util.List<java.lang.String> getUserIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames"></a>

```java
public java.util.List<java.lang.String> getAltNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `certMetadata`<sup>Required</sup> <a name="certMetadata" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadata"></a>

```java
public java.lang.String getCertMetadata();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans"></a>

```java
public java.lang.Boolean|IResolvable getExcludeCnFromSans();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans"></a>

```java
public java.util.List<java.lang.String> getIpSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

---

##### `minSecondsRemaining`<sup>Required</sup> <a name="minSecondsRemaining" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining"></a>

```java
public java.lang.Number getMinSecondsRemaining();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans"></a>

```java
public java.util.List<java.lang.String> getOtherSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyFormat`<sup>Required</sup> <a name="privateKeyFormat" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat"></a>

```java
public java.lang.String getPrivateKeyFormat();
```

- *Type:* java.lang.String

---

##### `removeRootsFromChain`<sup>Required</sup> <a name="removeRootsFromChain" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.removeRootsFromChain"></a>

```java
public java.lang.Boolean|IResolvable getRemoveRootsFromChain();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revoke`<sup>Required</sup> <a name="revoke" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke"></a>

```java
public java.lang.Boolean|IResolvable getRevoke();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revokeWithKey`<sup>Required</sup> <a name="revokeWithKey" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKey"></a>

```java
public java.lang.Boolean|IResolvable getRevokeWithKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans"></a>

```java
public java.util.List<java.lang.String> getUriSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds"></a>

```java
public java.util.List<java.lang.String> getUserIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCertConfig <a name="PkiSecretBackendCertConfig" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_cert.PkiSecretBackendCertConfig;

PkiSecretBackendCertConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .commonName(java.lang.String)
    .name(java.lang.String)
//  .altNames(java.util.List<java.lang.String>)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .certMetadata(java.lang.String)
//  .excludeCnFromSans(java.lang.Boolean|IResolvable)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .ipSans(java.util.List<java.lang.String>)
//  .issuerRef(java.lang.String)
//  .minSecondsRemaining(java.lang.Number)
//  .namespace(java.lang.String)
//  .notAfter(java.lang.String)
//  .otherSans(java.util.List<java.lang.String>)
//  .privateKeyFormat(java.lang.String)
//  .removeRootsFromChain(java.lang.Boolean|IResolvable)
//  .revoke(java.lang.Boolean|IResolvable)
//  .revokeWithKey(java.lang.Boolean|IResolvable)
//  .ttl(java.lang.String)
//  .uriSans(java.util.List<java.lang.String>)
//  .userIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName">commonName</a></code> | <code>java.lang.String</code> | CN of the certificate to create. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative names. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.certMetadata">certMetadata</a></code> | <code>java.lang.String</code> | A base 64 encoded value or an empty string to associate with the certificate's serial number. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format of data. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative IPs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining">minSecondsRemaining</a></code> | <code>java.lang.Number</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | List of other SANs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat">privateKeyFormat</a></code> | <code>java.lang.String</code> | The private key format. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.removeRootsFromChain">removeRootsFromChain</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the returned ca_chain field will not include any self-signed CA certificates. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke">revoke</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revokeWithKey">revokeWithKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Revoke the certificate with private key method upon resource destruction. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative URIs. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | List of Subject User IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames"></a>

```java
public java.util.List<java.lang.String> getAltNames();
```

- *Type:* java.util.List<java.lang.String>

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `certMetadata`<sup>Optional</sup> <a name="certMetadata" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.certMetadata"></a>

```java
public java.lang.String getCertMetadata();
```

- *Type:* java.lang.String

A base 64 encoded value or an empty string to associate with the certificate's serial number.

The role's no_store_metadata must be set to false, otherwise an error is returned when specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#cert_metadata PkiSecretBackendCert#cert_metadata}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans"></a>

```java
public java.lang.Boolean|IResolvable getExcludeCnFromSans();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans"></a>

```java
public java.util.List<java.lang.String> getIpSans();
```

- *Type:* java.util.List<java.lang.String>

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `minSecondsRemaining`<sup>Optional</sup> <a name="minSecondsRemaining" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining"></a>

```java
public java.lang.Number getMinSecondsRemaining();
```

- *Type:* java.lang.Number

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#not_after PkiSecretBackendCert#not_after}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans"></a>

```java
public java.util.List<java.lang.String> getOtherSans();
```

- *Type:* java.util.List<java.lang.String>

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat"></a>

```java
public java.lang.String getPrivateKeyFormat();
```

- *Type:* java.lang.String

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `removeRootsFromChain`<sup>Optional</sup> <a name="removeRootsFromChain" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.removeRootsFromChain"></a>

```java
public java.lang.Boolean|IResolvable getRemoveRootsFromChain();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the returned ca_chain field will not include any self-signed CA certificates.

Useful if end-users already have the root CA in their trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#remove_roots_from_chain PkiSecretBackendCert#remove_roots_from_chain}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke"></a>

```java
public java.lang.Boolean|IResolvable getRevoke();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `revokeWithKey`<sup>Optional</sup> <a name="revokeWithKey" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revokeWithKey"></a>

```java
public java.lang.Boolean|IResolvable getRevokeWithKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Revoke the certificate with private key method upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#revoke_with_key PkiSecretBackendCert#revoke_with_key}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans"></a>

```java
public java.util.List<java.lang.String> getUriSans();
```

- *Type:* java.util.List<java.lang.String>

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktn/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds"></a>

```java
public java.util.List<java.lang.String> getUserIds();
```

- *Type:* java.util.List<java.lang.String>

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---



