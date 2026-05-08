# `kubernetesAuthBackendConfig` Submodule <a name="`kubernetesAuthBackendConfig` Submodule" id="@cdktn/provider-vault.kubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendConfig <a name="KubernetesAuthBackendConfig" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kubernetes_auth_backend_config.KubernetesAuthBackendConfig;

KubernetesAuthBackendConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kubernetesHost(java.lang.String)
//  .backend(java.lang.String)
//  .disableIssValidation(java.lang.Boolean|IResolvable)
//  .disableLocalCaJwt(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .issuer(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .namespace(java.lang.String)
//  .pemKeys(java.util.List<java.lang.String>)
//  .tokenReviewerJwt(java.lang.String)
//  .tokenReviewerJwtWo(java.lang.String)
//  .tokenReviewerJwtWoVersion(java.lang.Number)
//  .useAnnotationsAsAliasMetadata(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation">disableIssValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.pemKeys">pemKeys</a></code> | <code>java.util.List<java.lang.String></code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwt">tokenReviewerJwt</a></code> | <code>java.lang.String</code> | A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwtWo">tokenReviewerJwtWo</a></code> | <code>java.lang.String</code> | A write-only service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwtWoVersion">tokenReviewerJwtWoVersion</a></code> | <code>java.lang.Number</code> | The version of token_reviewer_jwt_wo to use during write operations. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.useAnnotationsAsAliasMetadata">useAnnotationsAsAliasMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost"></a>

- *Type:* java.lang.String

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}

---

##### `disableIssValidation`<sup>Optional</sup> <a name="disableIssValidation" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* java.lang.String

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}

---

##### `pemKeys`<sup>Optional</sup> <a name="pemKeys" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.pemKeys"></a>

- *Type:* java.util.List<java.lang.String>

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}

---

##### `tokenReviewerJwt`<sup>Optional</sup> <a name="tokenReviewerJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwt"></a>

- *Type:* java.lang.String

A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}

---

##### `tokenReviewerJwtWo`<sup>Optional</sup> <a name="tokenReviewerJwtWo" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwtWo"></a>

- *Type:* java.lang.String

A write-only service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt_wo KubernetesAuthBackendConfig#token_reviewer_jwt_wo}

---

##### `tokenReviewerJwtWoVersion`<sup>Optional</sup> <a name="tokenReviewerJwtWoVersion" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwtWoVersion"></a>

- *Type:* java.lang.Number

The version of token_reviewer_jwt_wo to use during write operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt_wo_version KubernetesAuthBackendConfig#token_reviewer_jwt_wo_version}

---

##### `useAnnotationsAsAliasMetadata`<sup>Optional</sup> <a name="useAnnotationsAsAliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.useAnnotationsAsAliasMetadata"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata KubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation">resetDisableIssValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys">resetPemKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt">resetTokenReviewerJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwtWo">resetTokenReviewerJwtWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwtWoVersion">resetTokenReviewerJwtWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata">resetUseAnnotationsAsAliasMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDisableIssValidation` <a name="resetDisableIssValidation" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```java
public void resetDisableIssValidation()
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```java
public void resetDisableLocalCaJwt()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```java
public void resetKubernetesCaCert()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPemKeys` <a name="resetPemKeys" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys"></a>

```java
public void resetPemKeys()
```

##### `resetTokenReviewerJwt` <a name="resetTokenReviewerJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt"></a>

```java
public void resetTokenReviewerJwt()
```

##### `resetTokenReviewerJwtWo` <a name="resetTokenReviewerJwtWo" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwtWo"></a>

```java
public void resetTokenReviewerJwtWo()
```

##### `resetTokenReviewerJwtWoVersion` <a name="resetTokenReviewerJwtWoVersion" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwtWoVersion"></a>

```java
public void resetTokenReviewerJwtWoVersion()
```

##### `resetUseAnnotationsAsAliasMetadata` <a name="resetUseAnnotationsAsAliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata"></a>

```java
public void resetUseAnnotationsAsAliasMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct"></a>

```java
import io.cdktn.providers.vault.kubernetes_auth_backend_config.KubernetesAuthBackendConfig;

KubernetesAuthBackendConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kubernetes_auth_backend_config.KubernetesAuthBackendConfig;

KubernetesAuthBackendConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kubernetes_auth_backend_config.KubernetesAuthBackendConfig;

KubernetesAuthBackendConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kubernetes_auth_backend_config.KubernetesAuthBackendConfig;

KubernetesAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KubernetesAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput">disableIssValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput">pemKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput">tokenReviewerJwtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWoInput">tokenReviewerJwtWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWoVersionInput">tokenReviewerJwtWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput">useAnnotationsAsAliasMetadataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys">pemKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt">tokenReviewerJwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWo">tokenReviewerJwtWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWoVersion">tokenReviewerJwtWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata">useAnnotationsAsAliasMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disableIssValidationInput`<sup>Optional</sup> <a name="disableIssValidationInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableIssValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableLocalCaJwtInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```java
public java.lang.String getKubernetesCaCertInput();
```

- *Type:* java.lang.String

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```java
public java.lang.String getKubernetesHostInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pemKeysInput`<sup>Optional</sup> <a name="pemKeysInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput"></a>

```java
public java.util.List<java.lang.String> getPemKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenReviewerJwtInput`<sup>Optional</sup> <a name="tokenReviewerJwtInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput"></a>

```java
public java.lang.String getTokenReviewerJwtInput();
```

- *Type:* java.lang.String

---

##### `tokenReviewerJwtWoInput`<sup>Optional</sup> <a name="tokenReviewerJwtWoInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWoInput"></a>

```java
public java.lang.String getTokenReviewerJwtWoInput();
```

- *Type:* java.lang.String

---

##### `tokenReviewerJwtWoVersionInput`<sup>Optional</sup> <a name="tokenReviewerJwtWoVersionInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWoVersionInput"></a>

```java
public java.lang.Number getTokenReviewerJwtWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `useAnnotationsAsAliasMetadataInput`<sup>Optional</sup> <a name="useAnnotationsAsAliasMetadataInput" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getUseAnnotationsAsAliasMetadataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disableIssValidation`<sup>Required</sup> <a name="disableIssValidation" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableIssValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```java
public java.lang.Boolean|IResolvable getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `pemKeys`<sup>Required</sup> <a name="pemKeys" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys"></a>

```java
public java.util.List<java.lang.String> getPemKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenReviewerJwt`<sup>Required</sup> <a name="tokenReviewerJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt"></a>

```java
public java.lang.String getTokenReviewerJwt();
```

- *Type:* java.lang.String

---

##### `tokenReviewerJwtWo`<sup>Required</sup> <a name="tokenReviewerJwtWo" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWo"></a>

```java
public java.lang.String getTokenReviewerJwtWo();
```

- *Type:* java.lang.String

---

##### `tokenReviewerJwtWoVersion`<sup>Required</sup> <a name="tokenReviewerJwtWoVersion" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtWoVersion"></a>

```java
public java.lang.Number getTokenReviewerJwtWoVersion();
```

- *Type:* java.lang.Number

---

##### `useAnnotationsAsAliasMetadata`<sup>Required</sup> <a name="useAnnotationsAsAliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata"></a>

```java
public java.lang.Boolean|IResolvable getUseAnnotationsAsAliasMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendConfigConfig <a name="KubernetesAuthBackendConfigConfig" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kubernetes_auth_backend_config.KubernetesAuthBackendConfigConfig;

KubernetesAuthBackendConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kubernetesHost(java.lang.String)
//  .backend(java.lang.String)
//  .disableIssValidation(java.lang.Boolean|IResolvable)
//  .disableLocalCaJwt(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .issuer(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .namespace(java.lang.String)
//  .pemKeys(java.util.List<java.lang.String>)
//  .tokenReviewerJwt(java.lang.String)
//  .tokenReviewerJwtWo(java.lang.String)
//  .tokenReviewerJwtWoVersion(java.lang.Number)
//  .useAnnotationsAsAliasMetadata(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys">pemKeys</a></code> | <code>java.util.List<java.lang.String></code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt">tokenReviewerJwt</a></code> | <code>java.lang.String</code> | A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwtWo">tokenReviewerJwtWo</a></code> | <code>java.lang.String</code> | A write-only service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwtWoVersion">tokenReviewerJwtWoVersion</a></code> | <code>java.lang.Number</code> | The version of token_reviewer_jwt_wo to use during write operations. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata">useAnnotationsAsAliasMetadata</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}

---

##### `disableIssValidation`<sup>Optional</sup> <a name="disableIssValidation" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```java
public java.lang.Boolean|IResolvable getDisableIssValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```java
public java.lang.Boolean|IResolvable getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}

---

##### `pemKeys`<sup>Optional</sup> <a name="pemKeys" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```java
public java.util.List<java.lang.String> getPemKeys();
```

- *Type:* java.util.List<java.lang.String>

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}

---

##### `tokenReviewerJwt`<sup>Optional</sup> <a name="tokenReviewerJwt" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt"></a>

```java
public java.lang.String getTokenReviewerJwt();
```

- *Type:* java.lang.String

A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}

---

##### `tokenReviewerJwtWo`<sup>Optional</sup> <a name="tokenReviewerJwtWo" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwtWo"></a>

```java
public java.lang.String getTokenReviewerJwtWo();
```

- *Type:* java.lang.String

A write-only service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt_wo KubernetesAuthBackendConfig#token_reviewer_jwt_wo}

---

##### `tokenReviewerJwtWoVersion`<sup>Optional</sup> <a name="tokenReviewerJwtWoVersion" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwtWoVersion"></a>

```java
public java.lang.Number getTokenReviewerJwtWoVersion();
```

- *Type:* java.lang.Number

The version of token_reviewer_jwt_wo to use during write operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt_wo_version KubernetesAuthBackendConfig#token_reviewer_jwt_wo_version}

---

##### `useAnnotationsAsAliasMetadata`<sup>Optional</sup> <a name="useAnnotationsAsAliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata"></a>

```java
public java.lang.Boolean|IResolvable getUseAnnotationsAsAliasMetadata();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata KubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---



