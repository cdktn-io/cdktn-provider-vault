# `githubAuthBackend` Submodule <a name="`githubAuthBackend` Submodule" id="@cdktn/provider-vault.githubAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubAuthBackend <a name="GithubAuthBackend" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend vault_github_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GithubAuthBackend(Construct Scope, string Id, GithubAuthBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig">GithubAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig">GithubAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTune">ResetTune</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTune` <a name="PutTune" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.putTune"></a>

```csharp
private void PutTune(IResolvable|GithubAuthBackendTune[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.putTune.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetTune` <a name="ResetTune" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.resetTune"></a>

```csharp
private void ResetTune()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GithubAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GithubAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GithubAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GithubAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GithubAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GithubAuthBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GithubAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList">GithubAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationIdInput">OrganizationIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tuneInput">TuneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationId">OrganizationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tune"></a>

```csharp
public GithubAuthBackendTuneList Tune { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList">GithubAuthBackendTuneList</a>

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationIdInput"></a>

```csharp
public double OrganizationIdInput { get; }
```

- *Type:* double

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tuneInput"></a>

```csharp
public IResolvable|GithubAuthBackendTune[] TuneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.organizationId"></a>

```csharp
public double OrganizationId { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubAuthBackendConfig <a name="GithubAuthBackendConfig" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GithubAuthBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Organization,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    string BaseUrl = null,
    string Description = null,
    bool|IResolvable DisableRemount = null,
    string Id = null,
    string Namespace = null,
    double OrganizationId = null,
    string Path = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    IResolvable|GithubAuthBackendTune[] Tune = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organization">Organization</a></code> | <code>string</code> | The organization users must be part of. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The API endpoint to use. Useful if you are running GitHub Enterprise or an API-compatible authentication server. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.description">Description</a></code> | <code>string</code> | Specifies the description of the mount. This overrides the current stored value, if any. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#id GithubAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organizationId">OrganizationId</a></code> | <code>double</code> | The ID of the organization users must be part of. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | Path where the auth backend is mounted. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tune">Tune</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#tune GithubAuthBackend#tune}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization users must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#organization GithubAuthBackend#organization}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#alias_metadata GithubAuthBackend#alias_metadata}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The API endpoint to use. Useful if you are running GitHub Enterprise or an API-compatible authentication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#base_url GithubAuthBackend#base_url}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Specifies the description of the mount. This overrides the current stored value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#description GithubAuthBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#disable_remount GithubAuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#id GithubAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#namespace GithubAuthBackend#namespace}

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.organizationId"></a>

```csharp
public double OrganizationId { get; set; }
```

- *Type:* double

The ID of the organization users must be part of.

Vault will attempt to fetch and set this value if it is not provided (vault-1.10+)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#organization_id GithubAuthBackend#organization_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where the auth backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#path GithubAuthBackend#path}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_bound_cidrs GithubAuthBackend#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_explicit_max_ttl GithubAuthBackend#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_max_ttl GithubAuthBackend#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_no_default_policy GithubAuthBackend#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_num_uses GithubAuthBackend#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_period GithubAuthBackend#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_policies GithubAuthBackend#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_ttl GithubAuthBackend#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendConfig.property.tune"></a>

```csharp
public IResolvable|GithubAuthBackendTune[] Tune { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#tune GithubAuthBackend#tune}.

---

### GithubAuthBackendTune <a name="GithubAuthBackendTune" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GithubAuthBackendTune {
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string DefaultLeaseTtl = null,
    string ListingVisibility = null,
    string MaxLeaseTtl = null,
    string[] PassthroughRequestHeaders = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#allowed_response_headers GithubAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#audit_non_hmac_request_keys GithubAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#audit_non_hmac_response_keys GithubAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#default_lease_ttl GithubAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#listing_visibility GithubAuthBackend#listing_visibility}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#max_lease_ttl GithubAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#passthrough_request_headers GithubAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#allowed_response_headers GithubAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#audit_non_hmac_request_keys GithubAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#audit_non_hmac_response_keys GithubAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#default_lease_ttl GithubAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#listing_visibility GithubAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#max_lease_ttl GithubAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#passthrough_request_headers GithubAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/github_auth_backend#token_type GithubAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### GithubAuthBackendTuneList <a name="GithubAuthBackendTuneList" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GithubAuthBackendTuneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.get"></a>

```csharp
private GithubAuthBackendTuneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneList.property.internalValue"></a>

```csharp
public IResolvable|GithubAuthBackendTune[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>[]

---


### GithubAuthBackendTuneOutputReference <a name="GithubAuthBackendTuneOutputReference" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GithubAuthBackendTuneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```csharp
private void ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```csharp
private void ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```csharp
public string DefaultLeaseTtlInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```csharp
public string MaxLeaseTtlInput { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTuneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GithubAuthBackendTune InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.githubAuthBackend.GithubAuthBackendTune">GithubAuthBackendTune</a>

---



