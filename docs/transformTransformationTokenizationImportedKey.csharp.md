# `transformTransformationTokenizationImportedKey` Submodule <a name="`transformTransformationTokenizationImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationImportedKey <a name="TransformTransformationTokenizationImportedKey" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationTokenizationImportedKey(Construct Scope, string Id, TransformTransformationTokenizationImportedKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig">TransformTransformationTokenizationImportedKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig">TransformTransformationTokenizationImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation">ResetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo">ResetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion">ResetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode">ResetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores">ResetStores</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetAllowRotation` <a name="ResetAllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation"></a>

```csharp
private void ResetAllowRotation()
```

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod"></a>

```csharp
private void ResetAutoRotatePeriod()
```

##### `ResetCiphertextWo` <a name="ResetCiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo"></a>

```csharp
private void ResetCiphertextWo()
```

##### `ResetCiphertextWoVersion` <a name="ResetCiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion"></a>

```csharp
private void ResetCiphertextWoVersion()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed"></a>

```csharp
private void ResetDeletionAllowed()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction"></a>

```csharp
private void ResetHashFunction()
```

##### `ResetMappingMode` <a name="ResetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode"></a>

```csharp
private void ResetMappingMode()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion"></a>

```csharp
private void ResetMinDecryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetStores` <a name="ResetStores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores"></a>

```csharp
private void ResetStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationImportedKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationImportedKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationImportedKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationImportedKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationTokenizationImportedKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationTokenizationImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput">AllowRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput">CiphertextWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput">CiphertextWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput">HashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput">MappingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput">StoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation">AllowRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo">CiphertextWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction">HashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode">MappingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores">Stores</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion"></a>

```csharp
public double MinAvailableVersion { get; }
```

- *Type:* double

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `AllowRotationInput`<sup>Optional</sup> <a name="AllowRotationInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput"></a>

```csharp
public bool|IResolvable AllowRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput"></a>

```csharp
public double AutoRotatePeriodInput { get; }
```

- *Type:* double

---

##### `CiphertextWoInput`<sup>Optional</sup> <a name="CiphertextWoInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput"></a>

```csharp
public string CiphertextWoInput { get; }
```

- *Type:* string

---

##### `CiphertextWoVersionInput`<sup>Optional</sup> <a name="CiphertextWoVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput"></a>

```csharp
public double CiphertextWoVersionInput { get; }
```

- *Type:* double

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput"></a>

```csharp
public bool|IResolvable DeletionAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput"></a>

```csharp
public string HashFunctionInput { get; }
```

- *Type:* string

---

##### `MappingModeInput`<sup>Optional</sup> <a name="MappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput"></a>

```csharp
public string MappingModeInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput"></a>

```csharp
public double MinDecryptionVersionInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `StoresInput`<sup>Optional</sup> <a name="StoresInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput"></a>

```csharp
public string[] StoresInput { get; }
```

- *Type:* string[]

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `AllowRotation`<sup>Required</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation"></a>

```csharp
public bool|IResolvable AllowRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; }
```

- *Type:* double

---

##### ~~`CiphertextWo`~~<sup>Required</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string CiphertextWo { get; }
```

- *Type:* string

---

##### `CiphertextWoVersion`<sup>Required</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion"></a>

```csharp
public double CiphertextWoVersion { get; }
```

- *Type:* double

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction"></a>

```csharp
public string HashFunction { get; }
```

- *Type:* string

---

##### `MappingMode`<sup>Required</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode"></a>

```csharp
public string MappingMode { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Stores`<sup>Required</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores"></a>

```csharp
public string[] Stores { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationImportedKeyConfig <a name="TransformTransformationTokenizationImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationTokenizationImportedKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Name,
    string[] AllowedRoles = null,
    bool|IResolvable AllowRotation = null,
    double AutoRotatePeriod = null,
    string CiphertextWo = null,
    double CiphertextWoVersion = null,
    bool|IResolvable DeletionAllowed = null,
    string HashFunction = null,
    string MappingMode = null,
    double MaxTtl = null,
    double MinDecryptionVersion = null,
    string Namespace = null,
    string[] Stores = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation">AllowRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo">CiphertextWo</a></code> | <code>string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>double</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction">HashFunction</a></code> | <code>string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode">MappingMode</a></code> | <code>string</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores">Stores</a></code> | <code>string[]</code> | The stores that contain tokenized state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `AllowRotation`<sup>Optional</sup> <a name="AllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation"></a>

```csharp
public bool|IResolvable AllowRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; set; }
```

- *Type:* double

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `CiphertextWo`<sup>Optional</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo"></a>

```csharp
public string CiphertextWo { get; set; }
```

- *Type:* string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `CiphertextWoVersion`<sup>Optional</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion"></a>

```csharp
public double CiphertextWoVersion { get; set; }
```

- *Type:* double

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction"></a>

```csharp
public string HashFunction { get; set; }
```

- *Type:* string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `MappingMode`<sup>Optional</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode"></a>

```csharp
public string MappingMode { get; set; }
```

- *Type:* string

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; set; }
```

- *Type:* double

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `Stores`<sup>Optional</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores"></a>

```csharp
public string[] Stores { get; set; }
```

- *Type:* string[]

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---



