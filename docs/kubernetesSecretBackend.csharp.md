# `kubernetesSecretBackend` Submodule <a name="`kubernetesSecretBackend` Submodule" id="@cdktn/provider-vault.kubernetesSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackend <a name="KubernetesSecretBackend" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KubernetesSecretBackend(Construct Scope, string Id, KubernetesSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig">KubernetesSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig">KubernetesSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt">ResetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert">ResetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost">ResetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt">ResetServiceAccountJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWo">ResetServiceAccountJwtWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWoVersion">ResetServiceAccountJwtWoVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors"></a>

```csharp
private void ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableLocalCaJwt` <a name="ResetDisableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt"></a>

```csharp
private void ResetDisableLocalCaJwt()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetForceNoCache"></a>

```csharp
private void ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey"></a>

```csharp
private void ResetIdentityTokenKey()
```

##### `ResetKubernetesCaCert` <a name="ResetKubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert"></a>

```csharp
private void ResetKubernetesCaCert()
```

##### `ResetKubernetesHost` <a name="ResetKubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost"></a>

```csharp
private void ResetKubernetesHost()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion"></a>

```csharp
private void ResetPluginVersion()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

##### `ResetServiceAccountJwt` <a name="ResetServiceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt"></a>

```csharp
private void ResetServiceAccountJwt()
```

##### `ResetServiceAccountJwtWo` <a name="ResetServiceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWo"></a>

```csharp
private void ResetServiceAccountJwtWo()
```

##### `ResetServiceAccountJwtWoVersion` <a name="ResetServiceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWoVersion"></a>

```csharp
private void ResetServiceAccountJwtWoVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KubernetesSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KubernetesSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KubernetesSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KubernetesSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput">DisableLocalCaJwtInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput">KubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput">KubernetesHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput">LocalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput">ServiceAccountJwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoInput">ServiceAccountJwtWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersionInput">ServiceAccountJwtWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt">DisableLocalCaJwt</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost">KubernetesHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt">ServiceAccountJwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWo">ServiceAccountJwtWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersion">ServiceAccountJwtWoVersion</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput"></a>

```csharp
public string[] DelegatedAuthAccessorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableLocalCaJwtInput`<sup>Optional</sup> <a name="DisableLocalCaJwtInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput"></a>

```csharp
public bool|IResolvable DisableLocalCaJwtInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public bool|IResolvable ExternalEntropyAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCacheInput"></a>

```csharp
public bool|IResolvable ForceNoCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput"></a>

```csharp
public string IdentityTokenKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesCaCertInput`<sup>Optional</sup> <a name="KubernetesCaCertInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput"></a>

```csharp
public string KubernetesCaCertInput { get; }
```

- *Type:* string

---

##### `KubernetesHostInput`<sup>Optional</sup> <a name="KubernetesHostInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput"></a>

```csharp
public string KubernetesHostInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput"></a>

```csharp
public string PluginVersionInput { get; }
```

- *Type:* string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput"></a>

```csharp
public bool|IResolvable SealWrapInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccountJwtInput`<sup>Optional</sup> <a name="ServiceAccountJwtInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput"></a>

```csharp
public string ServiceAccountJwtInput { get; }
```

- *Type:* string

---

##### `ServiceAccountJwtWoInput`<sup>Optional</sup> <a name="ServiceAccountJwtWoInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoInput"></a>

```csharp
public string ServiceAccountJwtWoInput { get; }
```

- *Type:* string

---

##### `ServiceAccountJwtWoVersionInput`<sup>Optional</sup> <a name="ServiceAccountJwtWoVersionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersionInput"></a>

```csharp
public double ServiceAccountJwtWoVersionInput { get; }
```

- *Type:* double

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableLocalCaJwt`<sup>Required</sup> <a name="DisableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt"></a>

```csharp
public bool|IResolvable DisableLocalCaJwt { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; }
```

- *Type:* string

---

##### `KubernetesCaCert`<sup>Required</sup> <a name="KubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert"></a>

```csharp
public string KubernetesCaCert { get; }
```

- *Type:* string

---

##### `KubernetesHost`<sup>Required</sup> <a name="KubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost"></a>

```csharp
public string KubernetesHost { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; }
```

- *Type:* string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccountJwt`<sup>Required</sup> <a name="ServiceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt"></a>

```csharp
public string ServiceAccountJwt { get; }
```

- *Type:* string

---

##### `ServiceAccountJwtWo`<sup>Required</sup> <a name="ServiceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWo"></a>

```csharp
public string ServiceAccountJwtWo { get; }
```

- *Type:* string

---

##### `ServiceAccountJwtWoVersion`<sup>Required</sup> <a name="ServiceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersion"></a>

```csharp
public double ServiceAccountJwtWoVersion { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendConfig <a name="KubernetesSecretBackendConfig" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KubernetesSecretBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Path,
    string[] AllowedManagedKeys = null,
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    double DefaultLeaseTtlSeconds = null,
    string[] DelegatedAuthAccessors = null,
    string Description = null,
    bool|IResolvable DisableLocalCaJwt = null,
    bool|IResolvable ExternalEntropyAccess = null,
    bool|IResolvable ForceNoCache = null,
    string Id = null,
    string IdentityTokenKey = null,
    string KubernetesCaCert = null,
    string KubernetesHost = null,
    string ListingVisibility = null,
    bool|IResolvable Local = null,
    double MaxLeaseTtlSeconds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string[] PassthroughRequestHeaders = null,
    string PluginVersion = null,
    bool|IResolvable SealWrap = null,
    string ServiceAccountJwt = null,
    string ServiceAccountJwtWo = null,
    double ServiceAccountJwtWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path">Path</a></code> | <code>string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt">DisableLocalCaJwt</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>string</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost">KubernetesHost</a></code> | <code>string</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt">ServiceAccountJwt</a></code> | <code>string</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWo">ServiceAccountJwtWo</a></code> | <code>string</code> | Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWoVersion">ServiceAccountJwtWoVersion</a></code> | <code>double</code> | Version counter for write-only service account JWT. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#allowed_response_headers KubernetesSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#delegated_auth_accessors KubernetesSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `DisableLocalCaJwt`<sup>Optional</sup> <a name="DisableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt"></a>

```csharp
public bool|IResolvable DisableLocalCaJwt { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#force_no_cache KubernetesSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; set; }
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#identity_token_key KubernetesSecretBackend#identity_token_key}

---

##### `KubernetesCaCert`<sup>Optional</sup> <a name="KubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert"></a>

```csharp
public string KubernetesCaCert { get; set; }
```

- *Type:* string

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `KubernetesHost`<sup>Optional</sup> <a name="KubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost"></a>

```csharp
public string KubernetesHost { get; set; }
```

- *Type:* string

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#listing_visibility KubernetesSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#passthrough_request_headers KubernetesSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; set; }
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#plugin_version KubernetesSecretBackend#plugin_version}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `ServiceAccountJwt`<sup>Optional</sup> <a name="ServiceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt"></a>

```csharp
public string ServiceAccountJwt { get; set; }
```

- *Type:* string

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---

##### `ServiceAccountJwtWo`<sup>Optional</sup> <a name="ServiceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWo"></a>

```csharp
public string ServiceAccountJwtWo { get; set; }
```

- *Type:* string

Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

This value will not be stored in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#service_account_jwt_wo KubernetesSecretBackend#service_account_jwt_wo}

---

##### `ServiceAccountJwtWoVersion`<sup>Optional</sup> <a name="ServiceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWoVersion"></a>

```csharp
public double ServiceAccountJwtWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only service account JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kubernetes_secret_backend#service_account_jwt_wo_version KubernetesSecretBackend#service_account_jwt_wo_version}

---



