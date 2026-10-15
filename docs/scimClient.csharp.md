# `scimClient` Submodule <a name="`scimClient` Submodule" id="@cdktn/provider-vault.scimClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimClient <a name="ScimClient" id="@cdktn/provider-vault.scimClient.ScimClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ScimClient(Construct Scope, string Id, ScimClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig">ScimClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientConfig">ScimClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor">ResetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors">ResetAllowedExtraAliasMountAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption">ResetAllowGroupAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption">ResetAllowUserAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion">ResetDefaultSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens">ResetMaxActiveTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl">ResetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.scimClient.ScimClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.scimClient.ScimClient.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.scimClient.ScimClient.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts"></a>

```csharp
private void PutTimeouts(ScimClientTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `ResetAliasMountAccessor` <a name="ResetAliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor"></a>

```csharp
private void ResetAliasMountAccessor()
```

##### `ResetAllowedExtraAliasMountAccessors` <a name="ResetAllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors"></a>

```csharp
private void ResetAllowedExtraAliasMountAccessors()
```

##### `ResetAllowGroupAdoption` <a name="ResetAllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption"></a>

```csharp
private void ResetAllowGroupAdoption()
```

##### `ResetAllowUserAdoption` <a name="ResetAllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption"></a>

```csharp
private void ResetAllowUserAdoption()
```

##### `ResetDefaultSchemaVersion` <a name="ResetDefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion"></a>

```csharp
private void ResetDefaultSchemaVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.scimClient.ScimClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxActiveTokens` <a name="ResetMaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens"></a>

```csharp
private void ResetMaxActiveTokens()
```

##### `ResetMaxTokenTtl` <a name="ResetMaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl"></a>

```csharp
private void ResetMaxTokenTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.scimClient.ScimClient.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ScimClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ScimClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ScimClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ScimClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ScimClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ScimClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ScimClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deleting">Deleting</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput">AccessGrantPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput">AliasMountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput">AllowedExtraAliasMountAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput">AllowGroupAdoptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput">AllowUserAdoptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput">ClientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput">DefaultSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput">MaxActiveTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput">MaxTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal">AccessGrantPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors">AllowedExtraAliasMountAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption">AllowGroupAdoption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption">AllowUserAdoption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion">DefaultSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens">MaxActiveTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.scimClient.ScimClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.scimClient.ScimClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.scimClient.ScimClient.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.scimClient.ScimClient.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.scimClient.ScimClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.scimClient.ScimClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Deleting`<sup>Required</sup> <a name="Deleting" id="@cdktn/provider-vault.scimClient.ScimClient.property.deleting"></a>

```csharp
public IResolvable Deleting { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeouts"></a>

```csharp
public ScimClientTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a>

---

##### `AccessGrantPrincipalInput`<sup>Optional</sup> <a name="AccessGrantPrincipalInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput"></a>

```csharp
public string AccessGrantPrincipalInput { get; }
```

- *Type:* string

---

##### `AliasMountAccessorInput`<sup>Optional</sup> <a name="AliasMountAccessorInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput"></a>

```csharp
public string AliasMountAccessorInput { get; }
```

- *Type:* string

---

##### `AllowedExtraAliasMountAccessorsInput`<sup>Optional</sup> <a name="AllowedExtraAliasMountAccessorsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput"></a>

```csharp
public string[] AllowedExtraAliasMountAccessorsInput { get; }
```

- *Type:* string[]

---

##### `AllowGroupAdoptionInput`<sup>Optional</sup> <a name="AllowGroupAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput"></a>

```csharp
public bool|IResolvable AllowGroupAdoptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowUserAdoptionInput`<sup>Optional</sup> <a name="AllowUserAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput"></a>

```csharp
public bool|IResolvable AllowUserAdoptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput"></a>

```csharp
public string ClientNameInput { get; }
```

- *Type:* string

---

##### `DefaultSchemaVersionInput`<sup>Optional</sup> <a name="DefaultSchemaVersionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput"></a>

```csharp
public string DefaultSchemaVersionInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxActiveTokensInput`<sup>Optional</sup> <a name="MaxActiveTokensInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput"></a>

```csharp
public double MaxActiveTokensInput { get; }
```

- *Type:* double

---

##### `MaxTokenTtlInput`<sup>Optional</sup> <a name="MaxTokenTtlInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput"></a>

```csharp
public double MaxTokenTtlInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput"></a>

```csharp
public IResolvable|ScimClientTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `AccessGrantPrincipal`<sup>Required</sup> <a name="AccessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal"></a>

```csharp
public string AccessGrantPrincipal { get; }
```

- *Type:* string

---

##### `AliasMountAccessor`<sup>Required</sup> <a name="AliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor"></a>

```csharp
public string AliasMountAccessor { get; }
```

- *Type:* string

---

##### `AllowedExtraAliasMountAccessors`<sup>Required</sup> <a name="AllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors"></a>

```csharp
public string[] AllowedExtraAliasMountAccessors { get; }
```

- *Type:* string[]

---

##### `AllowGroupAdoption`<sup>Required</sup> <a name="AllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption"></a>

```csharp
public bool|IResolvable AllowGroupAdoption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowUserAdoption`<sup>Required</sup> <a name="AllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption"></a>

```csharp
public bool|IResolvable AllowUserAdoption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `DefaultSchemaVersion`<sup>Required</sup> <a name="DefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion"></a>

```csharp
public string DefaultSchemaVersion { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxActiveTokens`<sup>Required</sup> <a name="MaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens"></a>

```csharp
public double MaxActiveTokens { get; }
```

- *Type:* double

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl"></a>

```csharp
public double MaxTokenTtl { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ScimClientConfig <a name="ScimClientConfig" id="@cdktn/provider-vault.scimClient.ScimClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ScimClientConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessGrantPrincipal,
    string ClientName,
    string AliasMountAccessor = null,
    string[] AllowedExtraAliasMountAccessors = null,
    bool|IResolvable AllowGroupAdoption = null,
    bool|IResolvable AllowUserAdoption = null,
    string DefaultSchemaVersion = null,
    string DeletionPolicy = null,
    string Id = null,
    double MaxActiveTokens = null,
    double MaxTokenTtl = null,
    string Namespace = null,
    ScimClientTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal">AccessGrantPrincipal</a></code> | <code>string</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName">ClientName</a></code> | <code>string</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>string</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors">AllowedExtraAliasMountAccessors</a></code> | <code>string[]</code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption">AllowGroupAdoption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption">AllowUserAdoption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion">DefaultSchemaVersion</a></code> | <code>string</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens">MaxActiveTokens</a></code> | <code>double</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>double</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessGrantPrincipal`<sup>Required</sup> <a name="AccessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal"></a>

```csharp
public string AccessGrantPrincipal { get; set; }
```

- *Type:* string

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName"></a>

```csharp
public string ClientName { get; set; }
```

- *Type:* string

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '*', '-' and '.', and must start and end with a letter, digit or '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `AliasMountAccessor`<sup>Optional</sup> <a name="AliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor"></a>

```csharp
public string AliasMountAccessor { get; set; }
```

- *Type:* string

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `AllowedExtraAliasMountAccessors`<sup>Optional</sup> <a name="AllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors"></a>

```csharp
public string[] AllowedExtraAliasMountAccessors { get; set; }
```

- *Type:* string[]

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `AllowGroupAdoption`<sup>Optional</sup> <a name="AllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption"></a>

```csharp
public bool|IResolvable AllowGroupAdoption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `AllowUserAdoption`<sup>Optional</sup> <a name="AllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption"></a>

```csharp
public bool|IResolvable AllowUserAdoption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `DefaultSchemaVersion`<sup>Optional</sup> <a name="DefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion"></a>

```csharp
public string DefaultSchemaVersion { get; set; }
```

- *Type:* string

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxActiveTokens`<sup>Optional</sup> <a name="MaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens"></a>

```csharp
public double MaxActiveTokens { get; set; }
```

- *Type:* double

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `MaxTokenTtl`<sup>Optional</sup> <a name="MaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl"></a>

```csharp
public double MaxTokenTtl { get; set; }
```

- *Type:* double

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts"></a>

```csharp
public ScimClientTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

### ScimClientTimeouts <a name="ScimClientTimeouts" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ScimClientTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScimClientTimeoutsOutputReference <a name="ScimClientTimeoutsOutputReference" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ScimClientTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScimClientTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---



