# `agentRegistration` Submodule <a name="`agentRegistration` Submodule" id="@cdktn/provider-vault.agentRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistration <a name="AgentRegistration" id="@cdktn/provider-vault.agentRegistration.AgentRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration vault_agent_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AgentRegistration(Construct Scope, string Id, AgentRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig">AgentRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig">AgentRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies">ResetCeilingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy">ResetNoDefaultCeilingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails">ResetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCeilingPolicies` <a name="ResetCeilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies"></a>

```csharp
private void ResetCeilingPolicies()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNoDefaultCeilingPolicy` <a name="ResetNoDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy"></a>

```csharp
private void ResetNoDefaultCeilingPolicy()
```

##### `ResetOptionalAuthorizationDetails` <a name="ResetOptionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails"></a>

```csharp
private void ResetOptionalAuthorizationDetails()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner"></a>

```csharp
private void ResetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AgentRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AgentRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AgentRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AgentRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput">CeilingPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput">NoDefaultCeilingPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput">OptionalAuthorizationDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies">CeilingPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy">NoDefaultCeilingPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails">OptionalAuthorizationDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner">Owner</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `CeilingPoliciesInput`<sup>Optional</sup> <a name="CeilingPoliciesInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput"></a>

```csharp
public string[] CeilingPoliciesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NoDefaultCeilingPolicyInput`<sup>Optional</sup> <a name="NoDefaultCeilingPolicyInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput"></a>

```csharp
public bool|IResolvable NoDefaultCeilingPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="OptionalAuthorizationDetailsInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput"></a>

```csharp
public bool|IResolvable OptionalAuthorizationDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `CeilingPolicies`<sup>Required</sup> <a name="CeilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies"></a>

```csharp
public string[] CeilingPolicies { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NoDefaultCeilingPolicy`<sup>Required</sup> <a name="NoDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy"></a>

```csharp
public bool|IResolvable NoDefaultCeilingPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptionalAuthorizationDetails`<sup>Required</sup> <a name="OptionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails"></a>

```csharp
public bool|IResolvable OptionalAuthorizationDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistrationConfig <a name="AgentRegistrationConfig" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AgentRegistrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string EntityId,
    string[] CeilingPolicies = null,
    string Description = null,
    string Namespace = null,
    bool|IResolvable NoDefaultCeilingPolicy = null,
    bool|IResolvable OptionalAuthorizationDetails = null,
    string Owner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name for the agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId">EntityId</a></code> | <code>string</code> | Entity ID representing this agent. Each entity can only have one registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies">CeilingPolicies</a></code> | <code>string[]</code> | List of policy identifiers that define the authorization ceiling for this agent. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description">Description</a></code> | <code>string</code> | Detailed description of the agent's purpose. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy">NoDefaultCeilingPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, opts out of automatically adding the default-ceiling policy to this agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails">OptionalAuthorizationDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner">Owner</a></code> | <code>string</code> | Owner of the agent registration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name for the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Entity ID representing this agent. Each entity can only have one registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}

---

##### `CeilingPolicies`<sup>Optional</sup> <a name="CeilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies"></a>

```csharp
public string[] CeilingPolicies { get; set; }
```

- *Type:* string[]

List of policy identifiers that define the authorization ceiling for this agent.

Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Detailed description of the agent's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}

---

##### `NoDefaultCeilingPolicy`<sup>Optional</sup> <a name="NoDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy"></a>

```csharp
public bool|IResolvable NoDefaultCeilingPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, opts out of automatically adding the default-ceiling policy to this agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}

---

##### `OptionalAuthorizationDetails`<sup>Optional</sup> <a name="OptionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails"></a>

```csharp
public bool|IResolvable OptionalAuthorizationDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Owner of the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}

---



