# `azureSecretBackendRole` Submodule <a name="`azureSecretBackendRole` Submodule" id="@cdktn/provider-vault.azureSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendRole <a name="AzureSecretBackendRole" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role vault_azure_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRole(Construct Scope, string Id, AzureSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig">AzureSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig">AzureSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups">PutAzureGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles">PutAzureRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId">ResetApplicationObjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups">ResetAzureGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles">ResetAzureRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetExplicitMaxTtl">ResetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetPermanentlyDelete">ResetPermanentlyDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetPersistApp">ResetPersistApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetSignInAudience">ResetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureGroups` <a name="PutAzureGroups" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups"></a>

```csharp
private void PutAzureGroups(IResolvable|AzureSecretBackendRoleAzureGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]

---

##### `PutAzureRoles` <a name="PutAzureRoles" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles"></a>

```csharp
private void PutAzureRoles(IResolvable|AzureSecretBackendRoleAzureRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]

---

##### `ResetApplicationObjectId` <a name="ResetApplicationObjectId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId"></a>

```csharp
private void ResetApplicationObjectId()
```

##### `ResetAzureGroups` <a name="ResetAzureGroups" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups"></a>

```csharp
private void ResetAzureGroups()
```

##### `ResetAzureRoles` <a name="ResetAzureRoles" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles"></a>

```csharp
private void ResetAzureRoles()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExplicitMaxTtl` <a name="ResetExplicitMaxTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetExplicitMaxTtl"></a>

```csharp
private void ResetExplicitMaxTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPermanentlyDelete` <a name="ResetPermanentlyDelete" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetPermanentlyDelete"></a>

```csharp
private void ResetPermanentlyDelete()
```

##### `ResetPersistApp` <a name="ResetPersistApp" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetPersistApp"></a>

```csharp
private void ResetPersistApp()
```

##### `ResetSignInAudience` <a name="ResetSignInAudience" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetSignInAudience"></a>

```csharp
private void ResetSignInAudience()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AzureSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AzureSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AzureSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AzureSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AzureSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AzureSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AzureSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups">AzureGroups</a></code> | <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles">AzureRoles</a></code> | <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput">ApplicationObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput">AzureGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput">AzureRolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.explicitMaxTtlInput">ExplicitMaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDeleteInput">PermanentlyDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.persistAppInput">PersistAppInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudienceInput">SignInAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId">ApplicationObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDelete">PermanentlyDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.persistApp">PersistApp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudience">SignInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AzureGroups`<sup>Required</sup> <a name="AzureGroups" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups"></a>

```csharp
public AzureSecretBackendRoleAzureGroupsList AzureGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a>

---

##### `AzureRoles`<sup>Required</sup> <a name="AzureRoles" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles"></a>

```csharp
public AzureSecretBackendRoleAzureRolesList AzureRoles { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a>

---

##### `ApplicationObjectIdInput`<sup>Optional</sup> <a name="ApplicationObjectIdInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput"></a>

```csharp
public string ApplicationObjectIdInput { get; }
```

- *Type:* string

---

##### `AzureGroupsInput`<sup>Optional</sup> <a name="AzureGroupsInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureGroups[] AzureGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]

---

##### `AzureRolesInput`<sup>Optional</sup> <a name="AzureRolesInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureRoles[] AzureRolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExplicitMaxTtlInput`<sup>Optional</sup> <a name="ExplicitMaxTtlInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.explicitMaxTtlInput"></a>

```csharp
public string ExplicitMaxTtlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput"></a>

```csharp
public string MaxTtlInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PermanentlyDeleteInput`<sup>Optional</sup> <a name="PermanentlyDeleteInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDeleteInput"></a>

```csharp
public bool|IResolvable PermanentlyDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PersistAppInput`<sup>Optional</sup> <a name="PersistAppInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.persistAppInput"></a>

```csharp
public bool|IResolvable PersistAppInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SignInAudienceInput`<sup>Optional</sup> <a name="SignInAudienceInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudienceInput"></a>

```csharp
public string SignInAudienceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId"></a>

```csharp
public string ApplicationObjectId { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExplicitMaxTtl`<sup>Required</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.explicitMaxTtl"></a>

```csharp
public string ExplicitMaxTtl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl"></a>

```csharp
public string MaxTtl { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PermanentlyDelete`<sup>Required</sup> <a name="PermanentlyDelete" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDelete"></a>

```csharp
public bool|IResolvable PermanentlyDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PersistApp`<sup>Required</sup> <a name="PersistApp" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.persistApp"></a>

```csharp
public bool|IResolvable PersistApp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudience"></a>

```csharp
public string SignInAudience { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendRoleAzureGroups <a name="AzureSecretBackendRoleAzureGroups" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleAzureGroups {
    string GroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}. |

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}.

---

### AzureSecretBackendRoleAzureRoles <a name="AzureSecretBackendRoleAzureRoles" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleAzureRoles {
    string Scope,
    string RoleId = null,
    string RoleName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId">RoleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}. |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}.

---

##### `RoleId`<sup>Optional</sup> <a name="RoleId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}.

---

### AzureSecretBackendRoleConfig <a name="AzureSecretBackendRoleConfig" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Role,
    string ApplicationObjectId = null,
    IResolvable|AzureSecretBackendRoleAzureGroups[] AzureGroups = null,
    IResolvable|AzureSecretBackendRoleAzureRoles[] AzureRoles = null,
    string Backend = null,
    string Description = null,
    string ExplicitMaxTtl = null,
    string Id = null,
    string MaxTtl = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Namespace = null,
    bool|IResolvable PermanentlyDelete = null,
    bool|IResolvable PersistApp = null,
    string SignInAudience = null,
    string[] Tags = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role">Role</a></code> | <code>string</code> | Name of the role to create. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId">ApplicationObjectId</a></code> | <code>string</code> | Application Object ID for an existing service principal that will be used instead of creating dynamic service principals. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups">AzureGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]</code> | azure_groups block. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles">AzureRoles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]</code> | azure_roles block. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>string</code> | Specifies the explicit maximum lifetime of the lease and service principal. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>string</code> | Specifies the maximum TTL for service principals generated using this role. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.permanentlyDelete">PermanentlyDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.persistApp">PersistApp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, persists the created service principal and application for the lifetime of the role. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.signInAudience">SignInAudience</a></code> | <code>string</code> | Specifies the security principal types that are allowed to sign in to the application. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.tags">Tags</a></code> | <code>string[]</code> | Comma-separated strings of Azure tags to attach to an application. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>string</code> | Specifies the default TTL for service principals generated using this role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}

---

##### `ApplicationObjectId`<sup>Optional</sup> <a name="ApplicationObjectId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId"></a>

```csharp
public string ApplicationObjectId { get; set; }
```

- *Type:* string

Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}

---

##### `AzureGroups`<sup>Optional</sup> <a name="AzureGroups" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureGroups[] AzureGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]

azure_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}

---

##### `AzureRoles`<sup>Optional</sup> <a name="AzureRoles" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureRoles[] AzureRoles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]

azure_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}

---

##### `ExplicitMaxTtl`<sup>Optional</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.explicitMaxTtl"></a>

```csharp
public string ExplicitMaxTtl { get; set; }
```

- *Type:* string

Specifies the explicit maximum lifetime of the lease and service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#explicit_max_ttl AzureSecretBackendRole#explicit_max_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl"></a>

```csharp
public string MaxTtl { get; set; }
```

- *Type:* string

Specifies the maximum TTL for service principals generated using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#metadata AzureSecretBackendRole#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}

---

##### `PermanentlyDelete`<sup>Optional</sup> <a name="PermanentlyDelete" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.permanentlyDelete"></a>

```csharp
public bool|IResolvable PermanentlyDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#permanently_delete AzureSecretBackendRole#permanently_delete}

---

##### `PersistApp`<sup>Optional</sup> <a name="PersistApp" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.persistApp"></a>

```csharp
public bool|IResolvable PersistApp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, persists the created service principal and application for the lifetime of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#persist_app AzureSecretBackendRole#persist_app}

---

##### `SignInAudience`<sup>Optional</sup> <a name="SignInAudience" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.signInAudience"></a>

```csharp
public string SignInAudience { get; set; }
```

- *Type:* string

Specifies the security principal types that are allowed to sign in to the application.

Valid values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#sign_in_audience AzureSecretBackendRole#sign_in_audience}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Comma-separated strings of Azure tags to attach to an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#tags AzureSecretBackendRole#tags}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Specifies the default TTL for service principals generated using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureSecretBackendRoleAzureGroupsList <a name="AzureSecretBackendRoleAzureGroupsList" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleAzureGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get"></a>

```csharp
private AzureSecretBackendRoleAzureGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>[]

---


### AzureSecretBackendRoleAzureGroupsOutputReference <a name="AzureSecretBackendRoleAzureGroupsOutputReference" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleAzureGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>

---


### AzureSecretBackendRoleAzureRolesList <a name="AzureSecretBackendRoleAzureRolesList" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleAzureRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get"></a>

```csharp
private AzureSecretBackendRoleAzureRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>[]

---


### AzureSecretBackendRoleAzureRolesOutputReference <a name="AzureSecretBackendRoleAzureRolesOutputReference" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AzureSecretBackendRoleAzureRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId">ResetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName">ResetRoleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleId` <a name="ResetRoleId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId"></a>

```csharp
private void ResetRoleId()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName"></a>

```csharp
private void ResetRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AzureSecretBackendRoleAzureRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>

---



